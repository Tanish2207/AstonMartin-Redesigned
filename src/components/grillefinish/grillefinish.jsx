

import './grillefinish.css';
import Roof from '../roof/roof';

const GrilleFinish = ({ selectedSeat, selectedsecondarycolor, selectedprimarycolor,showinfofunction, lowerpackage, exteriorcolor, upperpackage,setgrille,grille }) => {

  if(grille==='bright')
    {
      const grillefinishcolorborderonel=document.querySelector("#grillefinishcolorborderone");
      const grillefinishcolorbordertwol=document.querySelector("#grillefinishcolorbordertwo");

      if(grillefinishcolorborderonel && grillefinishcolorbordertwol)
        {
          grillefinishcolorborderonel.style.borderBottom="2px solid white";
          grillefinishcolorbordertwol.style.borderBottom="none";

        }
    }
  
    if(grille==='dark')
      {

        const grillefinishcolorborderonel=document.querySelector("#grillefinishcolorborderone");
      const grillefinishcolorbordertwol=document.querySelector("#grillefinishcolorbordertwo");

      if(grillefinishcolorborderonel && grillefinishcolorbordertwol)
        {
          grillefinishcolorborderonel.style.borderBottom="none";
          grillefinishcolorbordertwol.style.borderBottom="2px solid white";

        }
      
      }

// q quantum silver
if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
  document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/q_auto/v1720677491/q_quantum_silver_bclbp_bcubp_bright_plate_mkd4mk.jpg";
  document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/q_auto/v1720677476/q_quantum_silver_bclbp_bcubp_dark_plate_wcetuu.jpg";


 

  document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/q_auto/v1720677491/q_quantum_silver_bclbp_bcubp_bright_plate_mkd4mk.jpg";
  document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/q_auto/v1720677491/q_quantum_silver_bclbp_bcubp_bright_plate_information_ohpviu.jpg";

}
if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
  document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/q_auto/v1720677474/q_quantum_silver_bclbp_gbubp_bright_plate_hsiccj.jpg";
  document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677473/q_quantum_silver_bclbp_gbubp_dark_plate_nizd5t.jpg";



  document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677474/q_quantum_silver_bclbp_gbubp_bright_plate_hsiccj.jpg";
  document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677473/q_quantum_silver_bclbp_gbubp_bright_plate_information_cr0l1e.jpg";

}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
  document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677450/q_quantum_silver_gblbp_bcubp_bright_plate_u3iksz.jpg";
  document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677450/q_quantum_silver_gblbp_bcubp_dark_plate_dsx1sn.jpg";





  document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677450/q_quantum_silver_gblbp_bcubp_bright_plate_u3iksz.jpg";
  document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677450/q_quantum_silver_gblbp_bcubp_bright_plate_information_obdsxn.jpg";

}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
  document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677449/q_quantum_silver_gblbp_gbubp_bright_plate_ukbzyt.jpg";
  document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677449/q_quantum_silver_gblbp_gbubp_dark_plate_p80ync.jpg";


 


  document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677449/q_quantum_silver_gblbp_gbubp_bright_plate_ukbzyt.jpg";
  document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677449/q_quantum_silver_gblbp_gbubp_bright_plate_information_xzojlr.jpg";

}
if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
  document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677457/q_quantum_silver_cflbp_bcubp_bright_plate_nu1wmp.jpg";
  document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677457/q_quantum_silver_cflbp_bcubp_dark_plate_egy3lf.jpg";





  document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677457/q_quantum_silver_cflbp_bcubp_bright_plate_nu1wmp.jpg";
  document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677457/q_quantum_silver_cflbp_bcubp_bright_plate_information_nb30rz.jpg";

}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
  document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677452/q_quantum_silver_cflbp_gbubp_bright_plate_jrdtcv.jpg";
  document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677451/q_quantum_silver_cflbp_gbubp_dark_plate_vevq9i.jpg";




  document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677452/q_quantum_silver_cflbp_gbubp_bright_plate_jrdtcv.jpg";
  document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677451/q_quantum_silver_cflbp_gbubp_bright_plate_information_tojvcc.jpg";

}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
  document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677456/q_quantum_silver_cflbp_cfubp_bright_plate_q4aio5.jpg";
  document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677456/q_quantum_silver_cflbp_cfubp_dark_plate_ymudz5.jpg";





  document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677456/q_quantum_silver_cflbp_cfubp_bright_plate_q4aio5.jpg";
  document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677456/q_quantum_silver_cflbp_cfubp_bright_plate_information_ndo0ke.jpg";

}

// q satin xenon grey
  if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698815/q_satin_xenon_grey_bclbp_bcubp_bright_plate_ysqwkq.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698795/q_satin_xenon_grey_bclbp_bcubp_dark_plate_mdzglf.jpg";


   

    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698815/q_satin_xenon_grey_bclbp_bcubp_bright_plate_ysqwkq.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698808/q_satin_xenon_grey_bclbp_bcubp_bright_plate_information_rnsf9o.jpg";

  }
  if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698774/q_satin_xenon_grey_bclbp_gbubp_bright_plate_information_rtl0f5.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698760/q_satin_xenon_grey_bclbp_gbubp_dark_plate_information_srawjg.jpg";


   

    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698774/q_satin_xenon_grey_bclbp_gbubp_bright_plate_information_rtl0f5.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698774/q_satin_xenon_grey_bclbp_gbubp_bright_plate_information_rtl0f5.jpg";

  }

  if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697938/q_satin_xenon_grey_gblbp_bcubp_bright_plate_i4vmrz.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697917/q_satin_xenon_grey_gblbp_bcubp_dark_plate_nbbaq2.jpg";





    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697938/q_satin_xenon_grey_gblbp_bcubp_bright_plate_i4vmrz.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697931/q_satin_xenon_grey_gblbp_bcubp_bright_plate_information_hyezzm.jpg";

  }

  if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697890/q_satin_xenon_grey_gblbp_gbubp_bright_plate_gnfmc0.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697903/q_satin_xenon_grey_gblbp_gbubp__dark_plate_krkclu.jpg";


 


    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697890/q_satin_xenon_grey_gblbp_gbubp_bright_plate_gnfmc0.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697883/q_satin_xenon_grey_gblbp_gbubp_bright_plate_information_qvogug.jpg";

  }
  if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698180/q_satin_xenon_grey_cflbp_bcubp_bright_plate_wijqtq.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698159/q_satin_xenon_grey_cflbp_bcubp_dark_plate_elukzw.jpg";


    


    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698180/q_satin_xenon_grey_cflbp_bcubp_bright_plate_wijqtq.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698173/q_satin_xenon_grey_cflbp_bcubp_bright_plate_information_isarrd.jpg";

  }

  if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698103/q_satin_xenon_grey_cflbp_gbubp_bright_plate_mlemlo.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697959/q_satin_xenon_grey_cflbp_gbubp_dark_plate_rulp4h.jpg";





    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698103/q_satin_xenon_grey_cflbp_gbubp_bright_plate_mlemlo.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697972/q_satin_xenon_grey_cflbp_gbubp_bright_plate_information_fotc4z.jpg";

  }

  if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698138/q_satin_xenon_grey_cflbp_cfubp_bright_plate_ovzrhx.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698117/q_satin_xenon_grey_cflbp_cfubp_dark_plate_phyhpk.jpg";


 


    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698138/q_satin_xenon_grey_cflbp_cfubp_bright_plate_ovzrhx.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698131/q_satin_xenon_grey_cflbp_cfubp_bright_plate_information_dlslkh.jpg";

  }


  // q casino royale 



  if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681584/q_casino_royale_bclbp_bcubp_bright_plate_u9zvt3.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681581/q_casino_royale_bclbp_bcubp_dark_plate_jiz2ow.jpg";




    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681584/q_casino_royale_bclbp_bcubp_bright_plate_u9zvt3.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681583/q_casino_royale_bclbp_bcubp_bright_plate_information_nfwhqb.jpg";

  }
  if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681576/q_casino_royale_bclbp_gbubp_bright_plate_gk1kvv.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681573/q_casino_royale_bclbp_gbubp_dark_plate_gpkri8.jpg";




    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681576/q_casino_royale_bclbp_gbubp_bright_plate_gk1kvv.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681574/q_casino_royale_bclbp_gbubp_bright_plate_information_bacirv.jpg";

  }

  if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681479/q_casino_royale_gblbp_bcubp_bright_plate_myrylz.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681474/q_casino_royale_gblbp_bcubp_dark_plate_fqntyl.jpg";




    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681479/q_casino_royale_gblbp_bcubp_bright_plate_myrylz.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681477/q_casino_royale_gblbp_bcubp_bright_plate_information_xef6uc.jpg";

  }

  if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681470/q_casino_royale_gblbp_gbubp_bright_plate_lyrgpj.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681467/q_casino_royale_gblbp_gbubp_dark_plate_m4podg.jpg";





    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681470/q_casino_royale_gblbp_gbubp_bright_plate_lyrgpj.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681469/q_casino_royale_gblbp_gbubp_bright_plate_information_kxsbos.jpg";

  }
  if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681502/q_casino_royale_cflbp_bcubp_bright_plate_az9cuf.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681498/q_casino_royale_cflbp_bcubp_dark_plate_v26whb.jpg";


   


    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681502/q_casino_royale_cflbp_bcubp_bright_plate_az9cuf.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681500/q_casino_royale_cflbp_bcubp_bright_plate_information_tqxjqm.jpg";

  }

  if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681484/q_casino_royale_cflbp_gbubp_bright_plate_qvt1kd.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681482/q_casino_royale_cflbp_gbubp_dark_plate_buatbr.jpg";




    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681484/q_casino_royale_cflbp_gbubp_bright_plate_qvt1kd.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681486/q_casino_royale_cflbp_gbubp_bright_plate_information_twsqkm.jpg";

  }

  if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681494/q_casino_royale_cflbp_cfubp_bright_plate_ftbljb.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681490/q_casino_royale_cflbp_cfubp_dark_plate_fjkn89.jpg";




    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681494/q_casino_royale_cflbp_cfubp_bright_plate_ftbljb.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681492/q_casino_royale_cflbp_cfubp_bright_plate_information_qxhwf9.jpg";

  }
  // q satin titanium grey


  if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685978/q_satin_titanium_grey_bclbp_bcubp_bright_plate_ools9p.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685974/q_satin_titanium_grey_bclbp_bcubp_dark_plate_ppz1bb.jpg";


    // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "2px solid white";
    //  document.querySelector("#grillefinishcolorbordertwo").src="q_satin_xenon_grey_bclbp_bcubp_dark_plate.jpg";

    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685978/q_satin_titanium_grey_bclbp_bcubp_bright_plate_ools9p.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685977/q_satin_titanium_grey_bclbp_bcubp_bright_plate_information_mjieaa.jpg";

  }
  if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685967/q_satin_titanium_grey_bclbp_gbubp_bright_plate_eawbnf.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685962/q_satin_titanium_grey_bclbp_gbubp_dark_plate_iqojub.jpg";


    // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "2px solid white";
    //  document.querySelector("#grillefinishcolorbordertwo").src="q_satin_xenon_grey_bclbp_bcubp_dark_plate.jpg";

    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685967/q_satin_titanium_grey_bclbp_gbubp_bright_plate_eawbnf.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685965/q_satin_titanium_grey_bclbp_gbubp_bright_plate_information_ihg0ye.jpg";

  }

  if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685846/q_satin_titanium_grey_gblbp_bcubp_bright_plate_hzv4hh.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685843/q_satin_titanium_grey_gblbp_bcubp_dark_plate_enr2ap.jpg";


    // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "2px solid white";


    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685846/q_satin_titanium_grey_gblbp_bcubp_bright_plate_hzv4hh.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685845/q_satin_titanium_grey_gblbp_bcubp_bright_plate_information_vw23qm.jpg";

  }

  if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685837/q_satin_titanium_grey_gblbp_gbubp_bright_plate_fh1scv.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685833/q_satin_titanium_grey_gblbp_gbubp_dark_plate_evhiw5.jpg";


    // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "2px solid white";


    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685837/q_satin_titanium_grey_gblbp_gbubp_bright_plate_fh1scv.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685836/q_satin_titanium_grey_gblbp_gbubp_bright_plate_information_oq09dc.jpg";

  }
  if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685881/q_satin_titanium_grey_cflbp_bcubp_bright_plate_xau5oa.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685874/q_satin_titanium_grey_cflbp_bcubp_dark_plate_aqaqdc.jpg";


   


    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685881/q_satin_titanium_grey_cflbp_bcubp_bright_plate_xau5oa.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685878/q_satin_titanium_grey_cflbp_bcubp_bright_plate_information_i1qi5k.jpg";

  }

  if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685857/q_satin_titanium_grey_cflbp_gbubp_bright_plate_fskl9y.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685852/q_satin_titanium_grey_cflbp_gbubp_dark_plate_kg3swa.jpg";





    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685857/q_satin_titanium_grey_cflbp_gbubp_bright_plate_fskl9y.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685855/q_satin_titanium_grey_cflbp_gbubp_bright_plate_information_hv8bns.jpg";

  }

  if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685868/q_satin_titanium_grey_cflbp_cfubp_bright_plate_ce2rxn.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685863/q_satin_titanium_grey_cflbp_cfubp_dark_plate_zgajcv.jpg";





    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685868/q_satin_titanium_grey_cflbp_cfubp_bright_plate_ce2rxn.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685866/q_satin_titanium_grey_cflbp_cfubp_bright_plate_information_jczj9l.jpg";

  }


  // q seychelles blue
  if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721105/q_seychelles_blue_bclbp_bcubp_bright_plate_mijrsk.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721095/q_seychelles_blue_bclbp_bcubp_dark_plate_n9a9m9.jpg";


    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721105/q_seychelles_blue_bclbp_bcubp_bright_plate_mijrsk.jpg";
    document.querySelector('#colorimage img').src = "q_seychelles_blue_bclbp_bcubp_brihttps://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721100/q_seychelles_blue_bclbp_bcubp_bright_plate_information_v54vol.jpgght_plate_information.jpg";

  }
  if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721091/q_seychelles_blue_bclbp_gbubp_bright_plate_fygqsv.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721081/q_seychelles_blue_bclbp_gbubp_dark_plate_eqwpek.jpg";




    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721091/q_seychelles_blue_bclbp_gbubp_bright_plate_fygqsv.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721086/q_seychelles_blue_bclbp_gbubp_bright_plate_information_ul1ipy.jpg";

  }

  if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720806/q_seychelles_blue_gblbp_bcubp_bright_plate_ysween.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720618/q_seychelles_blue_gblbp_bcubp_dark_plate_wnsjdg.jpg";




    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720806/q_seychelles_blue_gblbp_bcubp_bright_plate_ysween.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720766/q_seychelles_blue_gblbp_bcubp_bright_plate_information_pj3v5i.jpg";

  }

  if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720611/q_seychelles_blue_gblbp_gbubp_bright_plate_rbvrju.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720607/q_seychelles_blue_gblbp_gbubp_dark_plate_do6fav.jpg";


   


    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720611/q_seychelles_blue_gblbp_gbubp_bright_plate_rbvrju.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720609/q_seychelles_blue_gblbp_gbubp_bright_plate_information_abqdzq.jpg";

  }
  if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720982/q_seychelles_blue_cflbp_bcubp_bright_plate_vugi9g.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720973/q_seychelles_blue_cflbp_bcubp_dark_plate_ouz5j9.jpg";




    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720982/q_seychelles_blue_cflbp_bcubp_bright_plate_vugi9g.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720977/q_seychelles_blue_cflbp_bcubp_bright_plate_information_hkrmop.jpg";

  }

  if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720821/q_seychelles_blue_cflbp_gbubp_bright_plate_sibikr.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720815/q_seychelles_blue_cflbp_gbubp_dark_plate_isxygp.jpg";





    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720821/q_seychelles_blue_cflbp_gbubp_bright_plate_sibikr.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720818/q_seychelles_blue_cflbp_gbubp_bright_plate_information_mbakc5.jpg";

  }

  if (exteriorcolor === 'qseychelles_blue' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720965/q_seychelles_blue_cflbp_cfubp_bright_plate_bw1sma.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720958/q_seychelles_blue_cflbp_cfubp_dark_plate_dhuvvj.jpg";





    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720965/q_seychelles_blue_cflbp_cfubp_bright_plate_bw1sma.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720963/q_seychelles_blue_cflbp_cfubp_bright_plate_information_ivjfmf.jpg";

  }

  // q ion blue 
  if (exteriorcolor === 'qionblue' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753663/q_ion_blue_bclbp_bcubp_bright_plate_xqly5l.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753658/q_ion_blue_bclbp_bcubp_dark_plate_hk8wv9.jpg";
  
  
   
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753663/q_ion_blue_bclbp_bcubp_bright_plate_xqly5l.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753661/q_ion_blue_bclbp_bcubp_bright_plate_information_rssvkz.jpg";
  
  }
  if (exteriorcolor === 'qionblue' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753654/q_ion_blue_bclbp_gbubp_bright_plate_bf4uue.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753649/q_ion_blue_bclbp_gbubp_dark_plate_i1lx2e.jpg";
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753654/q_ion_blue_bclbp_gbubp_bright_plate_bf4uue.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753652/q_ion_blue_bclbp_gbubp_bright_plate_information_c1yehe.jpg";
  
  }
  
  if (exteriorcolor === 'qionblue' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753555/q_ion_blue_gblbp_bcubp_bright_plate_oryxyi.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753550/q_ion_blue_gblbp_bcubp_dark_plate_w8m2oz.jpg";
  
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753555/q_ion_blue_gblbp_bcubp_bright_plate_oryxyi.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753553/q_ion_blue_gblbp_bcubp_bright_plate_information_or5fnr.jpg";
  
  }
  
  if (exteriorcolor === 'qionblue' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753545/q_ion_blue_gblbp_gbubp_bright_plate_gdsorc.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753541/q_ion_blue_gblbp_gbubp_dark_plate_ojtcy5.jpg";
  
  
   
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753545/q_ion_blue_gblbp_gbubp_bright_plate_gdsorc.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753544/q_ion_blue_gblbp_gbubp_bright_plate_information_mantuj.jpg";
  
  }
  if (exteriorcolor === 'qionblue' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753582/q_ion_blue_cflbp_bcubp_bright_plate_cfogep.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753578/q_ion_blue_cflbp_bcubp_dark_plate_gmoh7f.jpg";
  
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753582/q_ion_blue_cflbp_bcubp_bright_plate_cfogep.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753581/q_ion_blue_cflbp_bcubp_bright_plate_information_seudnc.jpg";
  
  }
  
  if (exteriorcolor === 'qionblue' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753564/q_ion_blue_cflbp_gbubp_bright_plate_tjhahf.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753559/q_ion_blue_cflbp_gbubp_dark_plate_e2kb4e.jpg";
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753564/q_ion_blue_cflbp_gbubp_bright_plate_tjhahf.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753562/q_ion_blue_cflbp_gbubp_bright_plate_information_cugodz.jpg";
  
  }
  
  if (exteriorcolor === 'qionblue' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753573/q_ion_blue_cflbp_cfubp_bright_plate_ffcxei.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753568/q_ion_blue_cflbp_cfubp_dark_plate_ucpjai.jpg";
  
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753573/q_ion_blue_cflbp_cfubp_bright_plate_ffcxei.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753572/q_ion_blue_cflbp_cfubp_bright_plate_information_twnzas.jpg";
  
  }

  // plasma blue


  if (exteriorcolor === 'plasmablue' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720761083/plasma_blue_bclbp_bcubp_bright_plate_mheonn.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720761066/plasma_blue_bclbp_bcubp_dark_plate_hqgxjs.jpg";
  
  
   
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720761083/plasma_blue_bclbp_bcubp_bright_plate_mheonn.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720761078/plasma_blue_bclbp_bcubp_bright_plate_information_vimihj.jpg";
  
  }
  if (exteriorcolor === 'plasmablue' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760961/plasma_blue_bclbp_gbubp_bright_plate_olytmi.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760950/plasma_blue_bclbp_gbubp_dark_plate_lndu3e.jpg";
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760961/plasma_blue_bclbp_gbubp_bright_plate_olytmi.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760955/plasma_blue_bclbp_gbubp_bright_plate_information_hh1ifa.jpg";
  
  }
  
  if (exteriorcolor === 'plasmablue' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760366/plasma_blue_gblbp_bcubp_bright_plate_j7woxc.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760350/plasma_blue_gblbp_bcubp_dark_plate_rga0pt.jpg";
  
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760366/plasma_blue_gblbp_bcubp_bright_plate_j7woxc.jpg";
    document.querySelector('#colorimage img').src = "plasma_blue_gblbp_bcubp_bright_plate_information.jpg";
  
  }
  
  if (exteriorcolor === 'plasmablue' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760334/plasma_blue_gblbp_gbubp_bright_plate_dgcjxa.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760318/plasma_blue_gblbp_gbubp_dark_plate_gxo7an.jpg";
  
  
   
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760334/plasma_blue_gblbp_gbubp_bright_plate_dgcjxa.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760329/plasma_blue_gblbp_gbubp_bright_plate_information_jvv7rz.jpg";
  
  }
  if (exteriorcolor === 'plasmablue' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760468/plasma_blue_cflbp_bcubp_bright_plate_zgt8v2.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760451/plasma_blue_cflbp_bcubp_dark_plate_m5jbrv.jpg";
  
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760468/plasma_blue_cflbp_bcubp_bright_plate_zgt8v2.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760462/plasma_blue_cflbp_bcubp_bright_plate_information_kzvwo8.jpg";
  
  }
  
  if (exteriorcolor === 'plasmablue' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760400/plasma_blue_cflbp_gbubp_bright_plate_mxztl0.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760383/plasma_blue_cflbp_gbubp_dark_plate_fapopp.jpg";
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760400/plasma_blue_cflbp_gbubp_bright_plate_mxztl0.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760394/plasma_blue_cflbp_gbubp_bright_plate_information_falere.jpg";
  
  }
  
  if (exteriorcolor === 'plasmablue' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760434/plasma_blue_cflbp_cfubp_bright_plate_wqgeuw.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760417/plasma_blue_cflbp_cfubp_dark_plate_aoh6ee.jpg";
  
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760434/plasma_blue_cflbp_cfubp_bright_plate_wqgeuw.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760428/plasma_blue_cflbp_cfubp_bright_plate_information_iougng.jpg";
  
  }


  // elwood blue

  if (exteriorcolor === 'elwoodblue' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765433/elwood_blue_bclbp_bcubp_bright_plate_riotdh.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765404/elwood_blue_bclbp_bcubp_dark_plate_emp9ap.jpg";
  
  
   
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "elwood_blue_bclbp_bcubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765404/elwood_blue_bclbp_bcubp_dark_plate_emp9ap.jpg";
  
  }
  if (exteriorcolor === 'elwoodblue' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765374/elwood_blue_bclbp_gbubp_bright_plate_egtn7x.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765337/elwood_blue_bclbp_gbubp_dark_plate_ptxuop.jpg";
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765374/elwood_blue_bclbp_gbubp_bright_plate_egtn7x.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765356/elwood_blue_bclbp_gbubp_bright_plate_information_xj6jsv.jpg";
  
  }
  
  if (exteriorcolor === 'elwoodblue' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764216/elwood_blue_gblbp_bcubp_bright_plate_mr7lvo.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764187/elwood_blue_gblbp_bcubp_dark_plate_bxykip.jpg";
  
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764216/elwood_blue_gblbp_bcubp_bright_plate_mr7lvo.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764206/elwood_blue_gblbp_bcubp_bright_plate_information_nrohvy.jpg";
  
  }
  
  if (exteriorcolor === 'elwoodblue' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764158/elwood_blue_gblbp_gbubp_bright_plate_ibclzi.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764139/elwood_blue_gblbp_gbubp_dark_plate_m0avrd.jpg";
  
  
   
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764158/elwood_blue_gblbp_gbubp_bright_plate_ibclzi.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764149/elwood_blue_gblbp_gbubp_bright_plate_information_udnnop.jpg";
  
  }
  if (exteriorcolor === 'elwoodblue' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764910/elwood_blue_cflbp_bcubp_bright_plate_nes8o5.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764881/elwood_blue_cflbp_bcubp_dark_plate_snm59n.jpg";
  
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764910/elwood_blue_cflbp_bcubp_bright_plate_nes8o5.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764901/elwood_blue_cflbp_bcubp_bright_plate_information_ulnpch.jpg";
  
  }
  
  if (exteriorcolor === 'elwoodblue' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764273/elwood_blue_cflbp_gbubp_bright_plate_te3ncp.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764244/elwood_blue_cflbp_gbubp_dark_plate_u2jgev.jpg";
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764273/elwood_blue_cflbp_gbubp_bright_plate_te3ncp.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764264/elwood_blue_cflbp_gbubp_bright_plate_information_cp5j9w.jpg";
  
  }
  
  if (exteriorcolor === 'elwoodblue' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764853/elwood_blue_cflbp_cfubp_bright_plate_ld5g6w.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764784/elwood_blue_cflbp_cfubp_dark_plate_pi83kp.jpg";
  
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764853/elwood_blue_cflbp_cfubp_bright_plate_ld5g6w.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764846/elwood_blue_cflbp_cfubp_bright_plate_information_vyzysb.jpg";
  
  }

  // q digital violet

  if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769547/q_digital_violet_bclbp_bcubp_bright_plate_bnkz3y.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769542/q_digital_violet_bclbp_bcubp_dark_plate_qst8yf.jpg";
  
  
   
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769547/q_digital_violet_bclbp_bcubp_bright_plate_bnkz3y.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769546/q_digital_violet_bclbp_bcubp_bright_plate_information_sfs9de.jpg";
  
  }
  if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769537/q_digital_violet_bclbp_gbubp_bright_plate_gev9hv.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769530/q_digital_violet_bclbp_gbubp_dark_plate_qvjvdz.jpg";
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769537/q_digital_violet_bclbp_gbubp_bright_plate_gev9hv.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769533/q_digital_violet_bclbp_gbubp_bright_plate_information_num89f.jpg";
  
  }
  
  if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769412/q_digital_violet_gblbp_bcubp_bright_plate_utkyoi.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769404/q_digital_violet_gblbp_bcubp_dark_plate_eahqkd.jpg";
  
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769412/q_digital_violet_gblbp_bcubp_bright_plate_utkyoi.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769408/q_digital_violet_gblbp_bcubp_bright_plate_information_ju6lvz.jpg";
  
  }
  
  if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769399/q_digital_violet_gblbp_gbubp_bright_plate_eteuqs.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769393/q_digital_violet_gblbp_gbubp_dark_plate_cawsma.jpg";
  
  
   
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769399/q_digital_violet_gblbp_gbubp_bright_plate_eteuqs.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769397/q_digital_violet_gblbp_gbubp_bright_plate_information_wtnjyh.jpg";
  
  }
  if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769446/q_digital_violet_cflbp_bcubp_bright_plate_iob44s.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769440/q_digital_violet_cflbp_bcubp_dark_plate_wdeoz7.jpg";
  
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769446/q_digital_violet_cflbp_bcubp_bright_plate_iob44s.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769444/q_digital_violet_cflbp_bcubp_bright_plate_information_yqcqph.jpg";
  
  }
  
  if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769422/q_digital_violet_cflbp_gbubp_bright_plate_idnuaw.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769416/q_digital_violet_cflbp_gbubp_dark_plate_mzcmfh.jpg";
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769422/q_digital_violet_cflbp_gbubp_bright_plate_idnuaw.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769420/q_digital_violet_cflbp_gbubp_bright_plate_information_zeaj2e.jpg";
  
  }
  
  if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769434/q_digital_violet_cflbp_cfubp_bright_plate_ezt3zm.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769428/q_digital_violet_cflbp_cfubp_dark_plate_p5rk3o.jpg";
  
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769434/q_digital_violet_cflbp_cfubp_bright_plate_ezt3zm.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769432/q_digital_violet_cflbp_cfubp_bright_plate_information_w1f3qx.jpg";
  
  }

  // storm purple 

  if (exteriorcolor === 'stormpurple' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720771425/storm_purple_bclbp_bcubp_bright_plate_jzrth5.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771416/storm_purple_bclbp_bcubp_dark_plate_tkf33q.jpg";
  
  
   
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771425/storm_purple_bclbp_bcubp_bright_plate_jzrth5.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771425/storm_purple_bclbp_bcubp_bright_plate_information_fqqhnf.jpg";
  
  }
  if (exteriorcolor === 'stormpurple' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771394/storm_purple_bclbp_gbubp_bright_plate_ow5egd.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771379/storm_purple_bclbp_gbubp_dark_plate_wfksrl.jpg";
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771394/storm_purple_bclbp_gbubp_bright_plate_ow5egd.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771389/storm_purple_bclbp_gbubp_bright_plate_information_vbkvek.jpg";
  
  }
  
  if (exteriorcolor === 'stormpurple' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770985/storm_purple_gblbp_bcubp_bright_plate_cqixjh.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770969/storm_purple_gblbp_bcubp_dark_plate_o1hnif.jpg";
  
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770985/storm_purple_gblbp_bcubp_bright_plate_cqixjh.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770980/storm_purple_gblbp_bcubp_bright_plate_information_enwnh7.jpg";
  
  }
  
  if (exteriorcolor === 'stormpurple' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770954/storm_purple_gblbp_gbubp_bright_plate_ao0jv5.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770939/storm_purple_gblbp_gbubp_dark_plate_koturm.jpg";
  
  
   
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770954/storm_purple_gblbp_gbubp_bright_plate_ao0jv5.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770949/storm_purple_gblbp_gbubp_bright_plate_information_xo6mrs.jpg";
  
  }
  if (exteriorcolor === 'stormpurple' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771079/storm_purple_cflbp_bcubp_bright_plate_m8yzfu.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771069/storm_purple_cflbp_bcubp_dark_plate_lbu9ak.jpg";
  
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771079/storm_purple_cflbp_bcubp_bright_plate_m8yzfu.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771074/storm_purple_cflbp_bcubp_bright_plate_information_tb8a7l.jpg";
  
  }
  
  if (exteriorcolor === 'stormpurple' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771016/storm_purple_cflbp_gbubp_bright_plate_rypius.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771001/storm_purple_cflbp_gbubp_dark_plate_okoyrs.jpg";
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771016/storm_purple_cflbp_gbubp_bright_plate_rypius.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771011/storm_purple_cflbp_gbubp_bright_plate_information_d7dudh.jpg";
  
  }
  
  if (exteriorcolor === 'stormpurple' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
    document.querySelector("#grillefinishbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771048/storm_purple_cflbp_cfubp_bright_plate_bfsp31.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771032/storm_purple_cflbp_cfubp_dark_plate_lxvxzz.jpg";
  
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771048/storm_purple_cflbp_cfubp_bright_plate_bfsp31.jpg";
    document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771042/storm_purple_cflbp_cfubp_bright_plate_information_uupdvm.jpg";
  
  }




  const Bright = () => {

    setgrille('bright')

    if (exteriorcolor === 'qbuckinghamshiregreen' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_autov/1720891622/q_buckinghamshire_green_bclbp_bcubp_bright_r6qtuz.jpg";
     
      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_autov/1720879495/q_buckinghamshire_green_bclbp_bcubp_bright_plate_p023vr.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";
    
      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";
    
    console.log("i m working bro ")
      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_autov/1720891620/q_buckinghamshire_green_bclbp_bcubp_bright_plate_information_rah8fz.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    
    
    }
    
    if (exteriorcolor === 'qbuckinghamshiregreen' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_autov/1720891807/q_buckinghamshire_green_bclbp_gbubp_bright_mi5ce7.jpg";
    
      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_autov1720891805/q_buckinghamshire_green_bclbp_gbubp_bright_plate_n2usjz.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";
    
      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";
    
      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_autov/1720891805/q_buckinghamshire_green_bclbp_gbubp_bright_plate_information_jxcyva.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    
    
    
    }
    
    if (exteriorcolor === 'qbuckinghamshiregreen' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_autov/1720891974/q_buckinghamshire_green_gblbp_bcubp_bright_e8tvws.jpg";
    
      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_autov1720891973/q_buckinghamshire_green_gblbp_bcubp_bright_plate_lkrwr7.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";
    
      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";
    
      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_autov/1720891972/q_buckinghamshire_green_gblbp_bcubp_bright_plate_information_ayzxpm.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }
    
    if (exteriorcolor === 'qbuckinghamshiregreen' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_autov/1720891974/q_buckinghamshire_green_gblbp_bcubp_bright_e8tvws.jpg";
    
      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_autov1720891973/q_buckinghamshire_green_gblbp_bcubp_bright_plate_lkrwr7.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";
    
      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";
    
      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_autov/1720891972/q_buckinghamshire_green_gblbp_bcubp_bright_plate_information_ayzxpm.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    
    }
    
    if (exteriorcolor === 'qbuckinghamshiregreen' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_autov/1720892267/q_buckinghamshire_green_cflbp_bcubp_bright_jn3fbi.jpg";
    
      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_autov1720892266/q_buckinghamshire_green_cflbp_bcubp_bright_plate_rjpicc.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";
    
      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";
    
      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_autov/1720892266/q_buckinghamshire_green_cflbp_bcubp_bright_plate_information_nooa5o.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }
    
    if (exteriorcolor === 'qbuckinghamshiregreen' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_autov/1720892409/q_buckinghamshire_green_cflbp_gbubp_bright_epbcj9.jpg";
    
      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_autov1720892408/q_buckinghamshire_green_cflbp_gbubp_bright_plate_gwoq3q.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";
    
       document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";
    
      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_autov/1720892408/q_buckinghamshire_green_cflbp_gbubp_bright_plate_information_wexdu9.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    
    }
    
    if (exteriorcolor === 'qbuckinghamshiregreen' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720892534/q_buckinghamshire_green_cflbp_cfubp_bright_n55k5c.jpg";
    
      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720892533/q_buckinghamshire_green_cflbp_cfubp_bright_plate_h29pyf.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";
    
      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";
    
      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload?q_auto/v1720892533/q_buckinghamshire_green_cflbp_cfubp_bright_plate_information_shy5ml.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    
    }

// q quantum silver
if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
  document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677493/q_quantum_silver_bclbp_bcubp_bright_uzhrv2.jpg";

  document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677491/q_quantum_silver_bclbp_bcubp_bright_plate_mkd4mk.jpg";
  document.querySelector("#grillefinishpackagename").innerHTML = "Bright";


  document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677491/q_quantum_silver_bclbp_bcubp_bright_plate_information_ohpviu.jpg";
  document.querySelector("#colorcardcolorname").innerHTML = "Bright";
  document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";



}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
  document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677475/q_quantum_silver_bclbp_gbubp_bright_zeeoia.jpg";

  document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677474/q_quantum_silver_bclbp_gbubp_bright_plate_hsiccj.jpg";
  document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

  


  document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677473/q_quantum_silver_bclbp_gbubp_bright_plate_information_cr0l1e.jpg";
  document.querySelector("#colorcardcolorname").innerHTML = "Bright";
  document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";



}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
  document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677451/q_quantum_silver_gblbp_bcubp_bright_t1anvf.jpg";

  document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677450/q_quantum_silver_gblbp_bcubp_bright_plate_u3iksz.jpg";
  document.querySelector("#grillefinishpackagename").innerHTML = "Bright";



  document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677450/q_quantum_silver_gblbp_bcubp_bright_plate_information_obdsxn.jpg";
  document.querySelector("#colorcardcolorname").innerHTML = "Bright";
  document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
  document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677450/q_quantum_silver_gblbp_gbubp_bright_ejxwwf.jpg";

  document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677449/q_quantum_silver_gblbp_gbubp_bright_plate_ukbzyt.jpg";
  document.querySelector("#grillefinishpackagename").innerHTML = "Bright";


  document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677449/q_quantum_silver_gblbp_gbubp_bright_plate_information_xzojlr.jpg";
  document.querySelector("#colorcardcolorname").innerHTML = "Bright";
  document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
  document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677463/q_quantum_silver_cflbp_bcubp_bright_mc498c.jpg";

  document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677457/q_quantum_silver_cflbp_bcubp_bright_plate_nu1wmp.jpg";
  document.querySelector("#grillefinishpackagename").innerHTML = "Bright";



  document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677457/q_quantum_silver_cflbp_bcubp_bright_plate_information_nb30rz.jpg";
  document.querySelector("#colorcardcolorname").innerHTML = "Bright";
  document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
  document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677452/q_quantum_silver_cflbp_gbubp_bright_ofvvng.jpg";

  document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677452/q_quantum_silver_cflbp_gbubp_bright_plate_jrdtcv.jpg";
  document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

 

  document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677451/q_quantum_silver_cflbp_gbubp_bright_plate_information_tojvcc.jpg";
  document.querySelector("#colorcardcolorname").innerHTML = "Bright";
  document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
  document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677456/q_quantum_silver_cflbp_cfubp_bright_hxen2c.jpg";

  document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677456/q_quantum_silver_cflbp_cfubp_bright_plate_q4aio5.jpg";
  document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

  // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "2px solid white";
  // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "none";

  document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677456/q_quantum_silver_cflbp_cfubp_bright_plate_information_ndo0ke.jpg";
  document.querySelector("#colorcardcolorname").innerHTML = "Bright";
  document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

}


    // q satin xenon grey
    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698823/q_satin_xenon_grey_bclbp_bcubp_bright_h4kyrq.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698815/q_satin_xenon_grey_bclbp_bcubp_bright_plate_ysqwkq.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698808/q_satin_xenon_grey_bclbp_bcubp_bright_plate_information_rnsf9o.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";



    }

    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698781/q_satin_xenon_grey_bclbp_gbubp_bright_skwylg.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698774/q_satin_xenon_grey_bclbp_gbubp_bright_plate_information_rtl0f5.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

    

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698774/q_satin_xenon_grey_bclbp_gbubp_bright_plate_information_rtl0f5.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";



    }

    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697945/q_satin_xenon_grey_gblbp_bcubp_bright_x6nwdy.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697938/q_satin_xenon_grey_gblbp_bcubp_bright_plate_i4vmrz.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697931/q_satin_xenon_grey_gblbp_bcubp_bright_plate_information_hyezzm.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
    }

    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697897/q_satin_xenon_grey_gblbp_gbubp_bright_ngblpv.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697890/q_satin_xenon_grey_gblbp_gbubp_bright_plate_gnfmc0.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      
      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697883/q_satin_xenon_grey_gblbp_gbubp_bright_plate_information_qvogug.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698187/q_satin_xenon_grey_cflbp_bcubp_bright_fcylpc.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698180/q_satin_xenon_grey_cflbp_bcubp_bright_plate_wijqtq.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698173/q_satin_xenon_grey_cflbp_bcubp_bright_plate_information_isarrd.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
    }

    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697980/q_satin_xenon_grey_cflbp_gbubp_bright_s2l71u.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698103/q_satin_xenon_grey_cflbp_gbubp_bright_plate_mlemlo.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697972/q_satin_xenon_grey_cflbp_gbubp_bright_plate_information_fotc4z.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698145/q_satin_xenon_grey_cflbp_cfubp_bright_jrgbno.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698138/q_satin_xenon_grey_cflbp_cfubp_bright_plate_ovzrhx.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

   

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698131/q_satin_xenon_grey_cflbp_cfubp_bright_plate_information_dlslkh.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    // q_casino royale
    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681586/q_casino_royale_bclbp_bcubp_bright_vds0gp.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681584/q_casino_royale_bclbp_bcubp_bright_plate_u9zvt3.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     
      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681583/q_casino_royale_bclbp_bcubp_bright_plate_information_nfwhqb.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";



    }

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681577/q_casino_royale_bclbp_gbubp_bright_hakozt.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681576/q_casino_royale_bclbp_gbubp_bright_plate_gk1kvv.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681574/q_casino_royale_bclbp_gbubp_bright_plate_information_bacirv.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";



    }

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681478/q_casino_royale_gblbp_bcubp_bright_ckux94.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681479/q_casino_royale_gblbp_bcubp_bright_plate_myrylz.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681477/q_casino_royale_gblbp_bcubp_bright_plate_information_xef6uc.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
    }

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681472/q_casino_royale_gblbp_gbubp_bright_nc41yw.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681470/q_casino_royale_gblbp_gbubp_bright_plate_lyrgpj.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681469/q_casino_royale_gblbp_gbubp_bright_plate_information_kxsbos.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681503/q_casino_royale_cflbp_bcubp_bright_qytvc8.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681502/q_casino_royale_cflbp_bcubp_bright_plate_az9cuf.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "2px solid white";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "none";
// 
      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681500/q_casino_royale_cflbp_bcubp_bright_plate_information_tqxjqm.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
    }

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681487/q_casino_royale_cflbp_gbubp_bright_hg4hxg.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681484/q_casino_royale_cflbp_gbubp_bright_plate_qvt1kd.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681486/q_casino_royale_cflbp_gbubp_bright_plate_information_twsqkm.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681495/q_casino_royale_cflbp_cfubp_bright_qxfmiv.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681494/q_casino_royale_cflbp_cfubp_bright_plate_ftbljb.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681492/q_casino_royale_cflbp_cfubp_bright_plate_information_qxhwf9.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    // q satin titanium grey bright

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685981/q_satin_titanium_grey_bclbp_bcubp_bright_nehimf.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685978/q_satin_titanium_grey_bclbp_bcubp_bright_plate_ools9p.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685977/q_satin_titanium_grey_bclbp_bcubp_bright_plate_information_mjieaa.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";



    }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685969/q_satin_titanium_grey_bclbp_gbubp_bright_rd3aku.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685967/q_satin_titanium_grey_bclbp_gbubp_bright_plate_eawbnf.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685965/q_satin_titanium_grey_bclbp_gbubp_bright_plate_information_ihg0ye.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";



    }

    //continue from here 
    

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685848/q_satin_titanium_grey_gblbp_bcubp_bright_olljpm.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685846/q_satin_titanium_grey_gblbp_bcubp_bright_plate_hzv4hh.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685845/q_satin_titanium_grey_gblbp_bcubp_bright_plate_information_vw23qm.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
    }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685839/q_satin_titanium_grey_gblbp_gbubp_bright_kgvngk.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685837/q_satin_titanium_grey_gblbp_gbubp_bright_plate_fh1scv.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685836/q_satin_titanium_grey_gblbp_gbubp_bright_plate_information_oq09dc.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685879/q_satin_titanium_grey_cflbp_bcubp_bright_vqzfcx.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685881/q_satin_titanium_grey_cflbp_bcubp_bright_plate_xau5oa.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      
      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685878/q_satin_titanium_grey_cflbp_bcubp_bright_plate_information_i1qi5k.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
    }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685859/q_satin_titanium_grey_cflbp_gbubp_bright_bayv1x.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685857/q_satin_titanium_grey_cflbp_gbubp_bright_plate_fskl9y.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     
      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685855/q_satin_titanium_grey_cflbp_gbubp_bright_plate_information_hv8bns.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685870/q_satin_titanium_grey_cflbp_cfubp_bright_f9bc61.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685868/q_satin_titanium_grey_cflbp_cfubp_bright_plate_ce2rxn.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     
      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685866/q_satin_titanium_grey_cflbp_cfubp_bright_plate_information_jczj9l.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    // q seychelles blue

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721104/q_seychelles_blue_bclbp_bcubp_bright_sb5znf.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721105/q_seychelles_blue_bclbp_bcubp_bright_plate_mijrsk.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "none";

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721100/q_seychelles_blue_bclbp_bcubp_bright_plate_information_v54vol.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";



    }

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721089/q_seychelles_blue_bclbp_gbubp_bright_lwcsss.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721091/q_seychelles_blue_bclbp_gbubp_bright_plate_fygqsv.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "none";

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721086/q_seychelles_blue_bclbp_gbubp_bright_plate_information_ul1ipy.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";



    }

    //continue from here 
    

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720808/q_seychelles_blue_gblbp_bcubp_bright_yxb3w2.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720806/q_seychelles_blue_gblbp_bcubp_bright_plate_ysween.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      
      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720766/q_seychelles_blue_gblbp_bcubp_bright_plate_information_pj3v5i.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
    }

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720614/q_seychelles_blue_gblbp_gbubp_bright_phkxe9.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720611/q_seychelles_blue_gblbp_gbubp_bright_plate_rbvrju.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "none";

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720609/q_seychelles_blue_gblbp_gbubp_bright_plate_information_abqdzq.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720980/q_seychelles_blue_cflbp_bcubp_bright_dy6asl.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720982/q_seychelles_blue_cflbp_bcubp_bright_plate_vugi9g.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "none";

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720977/q_seychelles_blue_cflbp_bcubp_bright_plate_information_hkrmop.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
    }

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720953/q_seychelles_blue_cflbp_gbubp_bright_r1vqvs.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720821/q_seychelles_blue_cflbp_gbubp_bright_plate_sibikr.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "none";

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720818/q_seychelles_blue_cflbp_gbubp_bright_plate_information_mbakc5.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720969/q_seychelles_blue_cflbp_cfubp_bright_p5h2k8.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720965/q_seychelles_blue_cflbp_cfubp_bright_plate_bw1sma.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     
      

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720963/q_seychelles_blue_cflbp_cfubp_bright_plate_information_ivjfmf.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }


    // q ion blue
    
    if (exteriorcolor === 'qionblue' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753664/q_ion_blue_bclbp_bcubp_bright_aflaq5.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753663/q_ion_blue_bclbp_bcubp_bright_plate_xqly5l.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753661/q_ion_blue_bclbp_bcubp_bright_plate_information_rssvkz.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";



    }

    if (exteriorcolor === 'qionblue' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753655/q_ion_blue_bclbp_gbubp_bright_oh0cql.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753654/q_ion_blue_bclbp_gbubp_bright_plate_bf4uue.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753652/q_ion_blue_bclbp_gbubp_bright_plate_information_c1yehe.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";



    }
    

    if (exteriorcolor === 'qionblue' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753556/q_ion_blue_gblbp_bcubp_bright_guqgdw.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753555/q_ion_blue_gblbp_bcubp_bright_plate_oryxyi.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     
      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753553/q_ion_blue_gblbp_bcubp_bright_plate_information_or5fnr.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
    }

    if (exteriorcolor === 'qionblue' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753547/q_ion_blue_gblbp_gbubp_bright_glcwvl.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753545/q_ion_blue_gblbp_gbubp_bright_plate_gdsorc.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

    

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753544/q_ion_blue_gblbp_gbubp_bright_plate_information_mantuj.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    if (exteriorcolor === 'qionblue' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753584/q_ion_blue_cflbp_bcubp_bright_falje2.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753582/q_ion_blue_cflbp_bcubp_bright_plate_cfogep.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753581/q_ion_blue_cflbp_bcubp_bright_plate_information_seudnc.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
    }

    if (exteriorcolor === 'qionblue' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753566/q_ion_blue_cflbp_gbubp_bright_lw7zps.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753564/q_ion_blue_cflbp_gbubp_bright_plate_tjhahf.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753562/q_ion_blue_cflbp_gbubp_bright_plate_information_cugodz.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    if (exteriorcolor === 'qionblue' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753575/q_ion_blue_cflbp_cfubp_bright_tnka6a.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753573/q_ion_blue_cflbp_cfubp_bright_plate_ffcxei.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753572/q_ion_blue_cflbp_cfubp_bright_plate_information_twnzas.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    //plasma blue

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720761089/plasma_blue_bclbp_bcubp_bright_wpafaf.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720761083/plasma_blue_bclbp_bcubp_bright_plate_mheonn.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720761078/plasma_blue_bclbp_bcubp_bright_plate_information_vimihj.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";



    }

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760967/plasma_blue_bclbp_gbubp_bright_ix5nfc.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760961/plasma_blue_bclbp_gbubp_bright_plate_olytmi.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760955/plasma_blue_bclbp_gbubp_bright_plate_information_hh1ifa.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";



    }
    

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760372/plasma_blue_gblbp_bcubp_bright_xtm4h4.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760366/plasma_blue_gblbp_bcubp_bright_plate_j7woxc.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     
      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760361/plasma_blue_gblbp_bcubp_bright_plate_information_qv3bec.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
    }

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760339/plasma_blue_gblbp_gbubp_bright_odnisi.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760334/plasma_blue_gblbp_gbubp_bright_plate_dgcjxa.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

    

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760329/plasma_blue_gblbp_gbubp_bright_plate_information_jvv7rz.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760474/plasma_blue_cflbp_bcubp_bright_wdb7lb.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760468/plasma_blue_cflbp_bcubp_bright_plate_zgt8v2.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760462/plasma_blue_cflbp_bcubp_bright_plate_information_kzvwo8.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
    }

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760406/plasma_blue_cflbp_gbubp_bright_d1ltmu.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760400/plasma_blue_cflbp_gbubp_bright_plate_mxztl0.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760394/plasma_blue_cflbp_gbubp_bright_plate_information_falere.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760440/plasma_blue_cflbp_cfubp_bright_cklnqt.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760434/plasma_blue_cflbp_cfubp_bright_plate_wqgeuw.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760428/plasma_blue_cflbp_cfubp_bright_plate_information_iougng.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }
      // elwood blue


      if (exteriorcolor === 'elwoodblue' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
        document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765443/elwood_blue_bclbp_bcubp_bright_hgln5w.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765433/elwood_blue_bclbp_bcubp_bright_plate_riotdh.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
       
  
        document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765424/elwood_blue_bclbp_bcubp_bright_plate_information_naroac.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
  
  
  
      }
  
      if (exteriorcolor === 'elwoodblue' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
        document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765385/elwood_blue_bclbp_gbubp_bright_ann25t.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765374/elwood_blue_bclbp_gbubp_bright_plate_egtn7x.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
        
  
        document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765356/elwood_blue_bclbp_gbubp_bright_plate_information_xj6jsv.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
  
  
  
      }
      
  
      if (exteriorcolor === 'elwoodblue' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
        document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764225/elwood_blue_gblbp_bcubp_bright_px9nvp.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764216/elwood_blue_gblbp_bcubp_bright_plate_mr7lvo.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
       
        document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764206/elwood_blue_gblbp_bcubp_bright_plate_information_nrohvy.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
      }
  
      if (exteriorcolor === 'elwoodblue' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
        document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764168/elwood_blue_gblbp_gbubp_bright_arnekm.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764158/elwood_blue_gblbp_gbubp_bright_plate_ibclzi.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
      
  
        document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764149/elwood_blue_gblbp_gbubp_bright_plate_information_udnnop.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
  
      }
  
      if (exteriorcolor === 'elwoodblue' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
        document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764920/elwood_blue_cflbp_bcubp_bright_viuhmm.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764910/elwood_blue_cflbp_bcubp_bright_plate_nes8o5.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
        
  
        document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764901/elwood_blue_cflbp_bcubp_bright_plate_information_ulnpch.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
      }
  
      if (exteriorcolor === 'elwoodblue' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
        document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764283/elwood_blue_cflbp_gbubp_bright_t5clqf.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764273/elwood_blue_cflbp_gbubp_bright_plate_te3ncp.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
       
  
        document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764264/elwood_blue_cflbp_gbubp_bright_plate_information_cp5j9w.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
  
      }
  
      if (exteriorcolor === 'elwoodblue' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
        document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764862/elwood_blue_cflbp_cfubp_bright_tjc3ea.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764853/elwood_blue_cflbp_cfubp_bright_plate_ld5g6w.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
        
  
        document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764846/elwood_blue_cflbp_cfubp_bright_plate_information_vyzysb.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
  
      }

      
      // q digital violet 

      if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
        document.querySelector("#img1").src = "q_digital_violet_bclbp_bcubp_bright.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_digital_violet_bclbp_bcubp_bright_plate.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
       
  
        document.querySelector('#colorimage img').src = "q_digital_violet_bclbp_bcubp_bright_plate_information.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
  
  
  
      }
  
      if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
        document.querySelector("#img1").src = "q_digital_violet_bclbp_gbubp_bright.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_digital_violet_bclbp_gbubp_bright_plate.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
        
  
        document.querySelector('#colorimage img').src = "q_digital_violet_bclbp_gbubp_bright_plate_information.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
  
  
  
      }
      
  
      if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
        document.querySelector("#img1").src = "q_digital_violet_gblbp_bcubp_bright.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_digital_violet_gblbp_bcubp_bright_plate.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
       
        document.querySelector('#colorimage img').src = "q_digital_violet_gblbp_bcubp_bright_plate_information.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
      }
  
      if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
        document.querySelector("#img1").src = "q_digital_violet_gblbp_gbubp_bright.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_digital_violet_gblbp_gbubp_bright_plate.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
      
  
        document.querySelector('#colorimage img').src = "q_digital_violet_gblbp_gbubp_bright_plate_information.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
  
      }
  
      if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
        document.querySelector("#img1").src = "q_digital_violet_cflbp_bcubp_bright.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_digital_violet_cflbp_bcubp_bright_plate.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
        
  
        document.querySelector('#colorimage img').src = "q_digital_violet_cflbp_bcubp_bright_plate_information.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
      }
  
      if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
        document.querySelector("#img1").src = "q_digital_violet_cflbp_gbubp_bright.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_digital_violet_cflbp_gbubp_bright_plate.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
       
  
        document.querySelector('#colorimage img').src = "q_digital_violet_cflbp_gbubp_bright_plate_information.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
  
      }
  
      if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
        document.querySelector("#img1").src = "q_digital_violet_cflbp_cfubp_bright.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_digital_violet_cflbp_cfubp_bright_plate.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
        
  
        document.querySelector('#colorimage img').src = "q_digital_violet_cflbp_cfubp_bright_plate_information.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
  
      }
  

      // storm purple 

      if (exteriorcolor === 'stormpurple' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
        document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771432/storm_purple_bclbp_bcubp_bright_bofwu0.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771425/storm_purple_bclbp_bcubp_bright_plate_jzrth5.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
       
  
        document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771425/storm_purple_bclbp_bcubp_bright_plate_information_fqqhnf.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
  
  
  
      }
  
      if (exteriorcolor === 'stormpurple' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
        document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771400/storm_purple_bclbp_gbubp_bright_fdftvs.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771394/storm_purple_bclbp_gbubp_bright_plate_ow5egd.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
        
  
        document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771389/storm_purple_bclbp_gbubp_bright_plate_information_vbkvek.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
  
  
  
      }
      
  
      if (exteriorcolor === 'stormpurple' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
        document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770991/storm_purple_gblbp_bcubp_bright_zxzihz.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770985/storm_purple_gblbp_bcubp_bright_plate_cqixjh.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
       
        document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770980/storm_purple_gblbp_bcubp_bright_plate_information_enwnh7.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
      }
  
      if (exteriorcolor === 'stormpurple' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
        document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770959/storm_purple_gblbp_gbubp_bright_xuqy0o.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770954/storm_purple_gblbp_gbubp_bright_plate_ao0jv5.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
      
  
        document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770949/storm_purple_gblbp_gbubp_bright_plate_information_xo6mrs.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
  
      }
  
      if (exteriorcolor === 'stormpurple' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
        document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771085/storm_purple_cflbp_bcubp_bright_bjhscd.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771079/storm_purple_cflbp_bcubp_bright_plate_m8yzfu.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
        
  
        document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771074/storm_purple_cflbp_bcubp_bright_plate_information_tb8a7l.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
      }
  
      if (exteriorcolor === 'stormpurple' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
        document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771022/storm_purple_cflbp_gbubp_bright_dzwinu.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771016/storm_purple_cflbp_gbubp_bright_plate_rypius.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
       
  
        document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771011/storm_purple_cflbp_gbubp_bright_plate_information_d7dudh.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
  
      }
  
      if (exteriorcolor === 'stormpurple' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
        document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771053/storm_purple_cflbp_cfubp_bright_lgilzd.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771048/storm_purple_cflbp_cfubp_bright_plate_bfsp31.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
        
  
        document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771042/storm_purple_cflbp_cfubp_bright_plate_information_uupdvm.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
  
      }
  

  }

  const Dark = () => {
        setgrille('dark');


        if (exteriorcolor === 'qbuckinghamshiregreen' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
          document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720889950/q_buckinghamshire_green_bclbp_bcubp_dark_isqrsv.jpg";
         
          document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720889932/q_buckinghamshire_green_bclbp_bcubp_dark_plate_mf7fhp.jpg";
          document.querySelector("#grillefinishpackagename").innerHTML = "Dark";
        
          // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
          // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";
        
        console.log("i m working bro ")
          document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720889918/q_buckinghamshire_green_bclbp_bcubp_dark_plate_information_bg1bpv.jpg";
          document.querySelector("#colorcardcolorname").innerHTML = "Dark";
          document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
        
        
        }
        
        if (exteriorcolor === 'qbuckinghamshiregreen' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
          document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720890201/q_buckinghamshire_green_bclbp_gbubp_dark_l6xf53.jpg";
        
          document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720890199/q_buckinghamshire_green_bclbp_gbubp_dark_plate_jihpz2.jpg";
          document.querySelector("#grillefinishpackagename").innerHTML = "Dark";
        
          // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
          // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";
        
          document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720890198/q_buckinghamshire_green_bclbp_gbubp_dark_plate_information_wb4yoo.jpg";
          document.querySelector("#colorcardcolorname").innerHTML = "Dark";
          document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
        
        
        
        }
        
        if (exteriorcolor === 'qbuckinghamshiregreen' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
          document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720890372/q_buckinghamshire_green_gblbp_bcubp_dark_a5umze.jpg";
        
          document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720890371/q_buckinghamshire_green_gblbp_bcubp_dark_plate_jlzmei.jpg";
          document.querySelector("#grillefinishpackagename").innerHTML = "Dark";
        
          // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
          // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";
        
          document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720890371/q_buckinghamshire_green_gblbp_bcubp_dark_plate_information_vdwyg1.jpg";
          document.querySelector("#colorcardcolorname").innerHTML = "Dark";
          document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
        }
        
        if (exteriorcolor === 'qbuckinghamshiregreen' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
          document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720890598/q_buckinghamshire_green_gblbp_gbubp_dark_byrjpm.jpg";
        
          document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720890597/q_buckinghamshire_green_gblbp_gbubp_dark_plate_f9tkim.jpg";
          document.querySelector("#grillefinishpackagename").innerHTML = "Dark";
        
          // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
          // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";
        
          document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720890597/q_buckinghamshire_green_gblbp_gbubp_dark_plate_information_vlpjwc.jpg";
          document.querySelector("#colorcardcolorname").innerHTML = "Dark";
          document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
        
        }
        
        if (exteriorcolor === 'qbuckinghamshiregreen' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
          document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720890598/q_buckinghamshire_green_gblbp_gbubp_dark_byrjpm.jpg";
        
          document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720890597/q_buckinghamshire_green_gblbp_gbubp_dark_plate_f9tkim.jpg";
          document.querySelector("#grillefinishpackagename").innerHTML = "Dark";
        
          // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
          // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";
        
          document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720890597/q_buckinghamshire_green_gblbp_gbubp_dark_plate_information_vlpjwc.jpg";
          document.querySelector("#colorcardcolorname").innerHTML = "Dark";
          document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
        }
        
        if (exteriorcolor === 'qbuckinghamshiregreen' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
          document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720891040/q_buckinghamshire_green_cflbp_gbubp_dark_gvaru7.jpg";
        
          document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720891039/q_buckinghamshire_green_cflbp_gbubp_dark_plate_pchcdz.jpg";
          document.querySelector("#grillefinishpackagename").innerHTML = "Dark";
        
          // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
          // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";
        
          document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720891039/q_buckinghamshire_green_cflbp_gbubp_dark_plate_information_vap004.jpg";
          document.querySelector("#colorcardcolorname").innerHTML = "Dark";
          document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
        
        }
        
        if (exteriorcolor === 'qbuckinghamshiregreen' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
          document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720891340/q_buckinghamshire_green_cflbp_cfubp_dark_wpcjuy.jpg";
        
          document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720891339/q_buckinghamshire_green_cflbp_cfubp_dark_plate_vy6iuj.jpg";
          document.querySelector("#grillefinishpackagename").innerHTML = "Dark";
        
          // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
          // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";
        
          document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720891307/q_buckinghamshire_green_cflbp_cfubp_dark_plate_information_clho3u.jpg";
          document.querySelector("#colorcardcolorname").innerHTML = "Dark";
          document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
        
        }
// q quantum silver
if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
  document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677484/q_quantum_silver_bclbp_bcubp_dark_sg0d62.jpg";
  // document.querySelector("#grillefinishcolorborderone").src="q_satin_xenon_grey_bclbp_bcubp_bright_plate.jpg";
  // document.querySelector("#grillefinishcolorbordertwo").src="q_satin_xenon_grey_bclbp_bcubp_dark_plate.jpg";
  document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677476/q_quantum_silver_bclbp_bcubp_dark_plate_wcetuu.jpg";
  document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

  // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
  // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

console.log("i m working bro ")
  document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677476/q_quantum_silver_bclbp_bcubp_dark_plate_information_irpdqr.jpg";
  document.querySelector("#colorcardcolorname").innerHTML = "Dark";
  document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";


}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
  document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677473/q_quantum_silver_bclbp_gbubp_dark_d3jli0.jpg";

  document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677473/q_quantum_silver_bclbp_gbubp_dark_plate_nizd5t.jpg";
  document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

  // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
  // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

  document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677473/q_quantum_silver_bclbp_gbubp_dark_plate_information_v3paly.jpg";
  document.querySelector("#colorcardcolorname").innerHTML = "Dark";
  document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";



}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
  document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677450/q_quantum_silver_gblbp_bcubp_dark_owbgga.jpg";

  document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677450/q_quantum_silver_gblbp_bcubp_dark_plate_dsx1sn.jpg";
  document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

  // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
  // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

  document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677450/q_quantum_silver_gblbp_bcubp_dark_plate_information_xj0kuy.jpg";
  document.querySelector("#colorcardcolorname").innerHTML = "Dark";
  document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
  document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677449/q_quantum_silver_gblbp_gbubp_dark_vulms4.jpg";

  document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677449/q_quantum_silver_gblbp_gbubp_dark_plate_p80ync.jpg";
  document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

  // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
  // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

  document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677449/q_quantum_silver_gblbp_gbubp_dark_plate_information_l42fyi.jpg";
  document.querySelector("#colorcardcolorname").innerHTML = "Dark";
  document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
  document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677457/q_quantum_silver_cflbp_bcubp_dark_pru64k.jpg";

  document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677457/q_quantum_silver_cflbp_bcubp_dark_plate_egy3lf.jpg";
  document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

  // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
  // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

  document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677457/q_quantum_silver_cflbp_bcubp_dark_plate_information_z0jm5i.jpg";
  document.querySelector("#colorcardcolorname").innerHTML = "Dark";
  document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
  document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677452/q_quantum_silver_cflbp_gbubp_bright_ofvvng.jpg";

  document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677451/q_quantum_silver_cflbp_gbubp_dark_plate_vevq9i.jpg";
  document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

  // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
  // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

  document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677451/q_quantum_silver_cflbp_gbubp_dark_plate_information_ahwaxx.jpg";
  document.querySelector("#colorcardcolorname").innerHTML = "Dark";
  document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
  document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677456/q_quantum_silver_cflbp_cfubp_dark_zdpcxe.jpg";

  document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677456/q_quantum_silver_cflbp_cfubp_dark_plate_ymudz5.jpg";
  document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

  // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
  // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

  document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677456/q_quantum_silver_cflbp_cfubp_dark_plate_information_uxjyuj.jpg";
  document.querySelector("#colorcardcolorname").innerHTML = "Dark";
  document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

}



    //q satin xenon grey
    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698802/q_satin_xenon_grey_bclbp_bcubp_dark_kchz3k.jpg";
      // document.querySelector("#grillefinishcolorborderone").src="q_satin_xenon_grey_bclbp_bcubp_bright_plate.jpg";
      // document.querySelector("#grillefinishcolorbordertwo").src="q_satin_xenon_grey_bclbp_bcubp_dark_plate.jpg";
      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_xenon_grey_bclbp_bcubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";


      document.querySelector('#colorimage img').src = "q_satin_xenon_grey_bclbp_bcubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";


    }

    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698767/q_satin_xenon_grey_bclbp_gbubp_dark_x02f7p.jpg";

      const current=document.querySelector("#currentgrillefinishbodyinfoimage");
      current.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720698760/q_satin_xenon_grey_bclbp_gbubp_dark_plate_information_srawjg.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";


      const colorimage= document.querySelector('#colorimage img');
     colorimage.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698760/q_satin_xenon_grey_bclbp_gbubp_dark_plate_information_srawjg.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";



    }

    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697924/q_satin_xenon_grey_gblbp_bcubp_dark_haiz5a.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697917/q_satin_xenon_grey_gblbp_bcubp_dark_plate_nbbaq2.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697910/q_satin_xenon_grey_gblbp_bcubp_dark_plate_information_uy7kwr.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697876/q_satin_xenon_grey_gblbp_gbubp_dark_b0rcsi.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697903/q_satin_xenon_grey_gblbp_gbubp__dark_plate_krkclu.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697861/q_satin_xenon_grey_gblbp_gbubp_dark_plate_information_cldk9o.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698166/q_satin_xenon_grey_cflbp_bcubp_dark_giepr0.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698159/q_satin_xenon_grey_cflbp_bcubp_dark_plate_elukzw.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698152/q_satin_xenon_grey_cflbp_bcubp_dark_plate_information_ggwb2k.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697980/q_satin_xenon_grey_cflbp_gbubp_bright_s2l71u.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697959/q_satin_xenon_grey_cflbp_gbubp_dark_plate_rulp4h.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697952/q_satin_xenon_grey_cflbp_gbubp_dark_plate_information_dmrn04.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698124/q_satin_xenon_grey_cflbp_cfubp_dark_bw8znm.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698117/q_satin_xenon_grey_cflbp_cfubp_dark_plate_phyhpk.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698110/q_satin_xenon_grey_cflbp_cfubp_dark_plate_information_kpucjg.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }


    // q casino royale 

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681580/q_casino_royale_bclbp_bcubp_dark_k8msm0.jpg";
      // document.querySelector("#grillefinishcolorborderone").src="q_satin_xenon_grey_bclbp_bcubp_bright_plate.jpg";
      // document.querySelector("#grillefinishcolorbordertwo").src="q_satin_xenon_grey_bclbp_bcubp_dark_plate.jpg";
      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681581/q_casino_royale_bclbp_bcubp_dark_plate_jiz2ow.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";


      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681578/q_casino_royale_bclbp_bcubp_dark_plate_information_c4dwd0.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";


    }

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681572/q_casino_royale_bclbp_gbubp_dark_fmlrji.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681573/q_casino_royale_bclbp_gbubp_dark_plate_gpkri8.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681569/q_casino_royale_bclbp_gbubp_dark_plate_information_xzooii.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";



    }

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681475/q_casino_royale_gblbp_bcubp_dark_fsbiw2.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681474/q_casino_royale_gblbp_bcubp_dark_plate_fqntyl.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681473/q_casino_royale_gblbp_bcubp_dark_plate_information_hqgsrh.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681467/q_casino_royale_gblbp_gbubp_dark_dbedsp.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681467/q_casino_royale_gblbp_gbubp_dark_plate_m4podg.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681465/q_casino_royale_gblbp_gbubp_dark_plate_information_jm5jvg.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681499/q_casino_royale_cflbp_bcubp_dark_oosnzv.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681498/q_casino_royale_cflbp_bcubp_dark_plate_v26whb.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderoen").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681496/q_casino_royale_cflbp_bcubp_dark_plate_information_fqxdgm.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681484/q_casino_royale_cflbp_gbubp_dark_gvjdub.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681482/q_casino_royale_cflbp_gbubp_dark_plate_buatbr.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681481/q_casino_royale_cflbp_gbubp_dark_plate_information_n2og4s.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "q_casino_royale_cflbp_cfhttps://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681491/q_casino_royale_cflbp_cfubp_dark_ghl1ib.jpgubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681490/q_casino_royale_cflbp_cfubp_dark_plate_fjkn89.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681489/q_casino_royale_cflbp_cfubp_dark_plate_information_hjydly.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    // q satin titanium grey


    // if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
    //   document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685973/q_satin_titanium_grey_bclbp_bcubp_dark_ccqkh4.jpg";
    //   // document.querySelector("#grillefinishcolorborderone").src="q_satin_xenon_grey_bclbp_bcubp_bright_plate.jpg";
    //   // document.querySelector("#grillefinishcolorbordertwo").src="q_satin_xenon_grey_bclbp_bcubp_dark_plate.jpg";
    //   document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685974/q_satin_titanium_grey_bclbp_bcubp_dark_plate_ppz1bb.jpg";
    //   document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

    //   // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
    //   // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";


    //   document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685971/q_satin_titanium_grey_bclbp_bcubp_dark_plate_information_xsuqlw.jpg";
    //   document.querySelector("#colorcardcolorname").innerHTML = "Dark";
    //   document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";


    // }

    // if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
    //   document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685961/q_satin_titanium_grey_bclbp_gbubp_dark_i9z9ei.jpg";

    //   document.querySelector("#currentgrillefinishbodyinfoimage").src = " https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685962/q_satin_titanium_grey_bclbp_gbubp_dark_plate_iqojub.jpg";
    //   document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

    //   // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
    //   // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

    //   document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685959/q_satin_titanium_grey_bclbp_gbubp_dark_plate_information_hyputx.jpg";
    //   document.querySelector("#colorcardcolorname").innerHTML = "Dark";
    //   document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";



    // }

    // if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
    //   document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685842/q_satin_titanium_grey_gblbp_bcubp_dark_uhqaiy.jpg";

    //   document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685843/q_satin_titanium_grey_gblbp_bcubp_dark_plate_enr2ap.jpg";
    //   document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

    //   // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";
    //   // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";

    //   document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685840/q_satin_titanium_grey_gblbp_bcubp_dark_plate_information_draoor.jpg";
    //   document.querySelector("#colorcardcolorname").innerHTML = "Dark";
    //   document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    // }

    // if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
    //   document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685835/q_satin_titanium_grey_gblbp_gbubp_dark_vctjwu.jpg";

    //   document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685833/q_satin_titanium_grey_gblbp_gbubp_dark_plate_evhiw5.jpg";
    //   document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

    //   // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
    //   // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

    //   document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685832/q_satin_titanium_grey_gblbp_gbubp_dark_plate_information_l8pphi.jpg";
    //   document.querySelector("#colorcardcolorname").innerHTML = "Dark";
    //   document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    // }

    // if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
    //   document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685876/q_satin_titanium_grey_cflbp_bcubp_dark_alwnfb.jpg";

    //   document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685874/q_satin_titanium_grey_cflbp_bcubp_dark_plate_aqaqdc.jpg";
    //   document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

    //   // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
    //   // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

    //   document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685872/q_satin_titanium_grey_cflbp_bcubp_dark_plate_information_mskruq.jpg";
    //   document.querySelector("#colorcardcolorname").innerHTML = "Dark";
    //   document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    // }

    // if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
    //   document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685859/q_satin_titanium_grey_cflbp_gbubp_bright_bayv1x.jpg";

    //   document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_tihttps://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685852/q_satin_titanium_grey_cflbp_gbubp_dark_plate_kg3swa.jpgtanium_grey_cflbp_gbubp_dark_plate.jpg";
    //   document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

    //   // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
    //   // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

    //   document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685850/q_satin_titanium_grey_cflbp_gbubp_dark_plate_information_atjle9.jpg";
    //   document.querySelector("#colorcardcolorname").innerHTML = "Dark";
    //   document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    // }

    // if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
    //   document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685865/q_satin_titanium_grey_cflbp_cfubp_dark_ezvlnf.jpg";

    //   document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685863/q_satin_titanium_grey_cflbp_cfubp_dark_plate_zgajcv.jpg";
    //   document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

    //   // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
    //   // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

    //   document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685861/q_satin_titanium_grey_cflbp_cfubp_dark_plate_information_xeql5t.jpg";
    //   document.querySelector("#colorcardcolorname").innerHTML = "Dark";
    //   document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    // } 
    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685973/q_satin_titanium_grey_bclbp_bcubp_dark_ccqkh4.jpg";
      // document.querySelector("#grillefinishcolorborderone").src="q_satin_xenon_grey_bclbp_bcubp_bright_plate.jpg";
      // document.querySelector("#grillefinishcolorbordertwo").src="q_satin_xenon_grey_bclbp_bcubp_dark_plate.jpg";
      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685974/q_satin_titanium_grey_bclbp_bcubp_dark_plate_ppz1bb.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";


      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685971/q_satin_titanium_grey_bclbp_bcubp_dark_plate_information_xsuqlw.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";


    }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685961/q_satin_titanium_grey_bclbp_gbubp_dark_i9z9ei.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685962/q_satin_titanium_grey_bclbp_gbubp_dark_plate_iqojub.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";
      
      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685959/q_satin_titanium_grey_bclbp_gbubp_dark_plate_information_hyputx.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";



    }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685842/q_satin_titanium_grey_gblbp_bcubp_dark_uhqaiy.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685843/q_satin_titanium_grey_gblbp_bcubp_dark_plate_enr2ap.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685840/q_satin_titanium_grey_gblbp_bcubp_dark_plate_information_draoor.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685835/q_satin_titanium_grey_gblbp_gbubp_dark_vctjwu.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685833/q_satin_titanium_grey_gblbp_gbubp_dark_plate_evhiw5.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685832/q_satin_titanium_grey_gblbp_gbubp_dark_plate_information_l8pphi.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685876/q_satin_titanium_grey_cflbp_bcubp_dark_alwnfb.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685874/q_satin_titanium_grey_cflbp_bcubp_dark_plate_aqaqdc.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685872/q_satin_titanium_grey_cflbp_bcubp_dark_plate_information_mskruq.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685854/q_satin_titanium_grey_cflbp_gbubp_dark_vhycux.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685852/q_satin_titanium_grey_cflbp_gbubp_dark_plate_kg3swa.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685850/q_satin_titanium_grey_cflbp_gbubp_dark_plate_information_atjle9.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685865/q_satin_titanium_grey_cflbp_cfubp_dark_ezvlnf.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685863/q_satin_titanium_grey_cflbp_cfubp_dark_plate_zgajcv.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685861/q_satin_titanium_grey_cflbp_cfubp_dark_plate_information_xeql5t.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }
    

    // q seychelles blue
    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_seychelles_blue_bclbp_bcubp_dark.jpg";
      // document.querySelector("#grillefinishcolorborderone").src="q_satin_xenon_grey_bclbp_bcubp_bright_plate.jpg";
      // document.querySelector("#grillefinishcolorbordertwo").src="q_satin_xenon_grey_bclbp_bcubp_dark_plate.jpg";
      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721095/q_seychelles_blue_bclbp_bcubp_dark_plate_n9a9m9.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";


      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721093/q_seychelles_blue_bclbp_bcubp_dark_plate_information_byz1fo.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";


    }

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721084/q_seychelles_blue_bclbp_gbubp_dark_rjdxxi.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721081/q_seychelles_blue_bclbp_gbubp_dark_plate_eqwpek.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721079/q_seychelles_blue_bclbp_gbubp_dark_plate_information_iqy1dv.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";



    }

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720651/q_seychelles_blue_gblbp_bcubp_dark_cgwoxg.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720618/q_seychelles_blue_gblbp_bcubp_dark_plate_wnsjdg.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";
      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720616/q_seychelles_blue_gblbp_bcubp_dark_plate_information_p7kozd.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720605/q_seychelles_blue_gblbp_gbubp_dark_uonao9.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720607/q_seychelles_blue_gblbp_gbubp_dark_plate_do6fav.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720603/q_seychelles_blue_gblbp_gbubp_dark_plate_information_ekehi4.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720975/q_seychelles_blue_cflbp_bcubp_dark_pykeuw.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720973/q_seychelles_blue_cflbp_bcubp_dark_plate_ouz5j9.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720970/q_seychelles_blue_cflbp_bcubp_dark_plate_information_l0obxv.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720953/q_seychelles_blue_cflbp_gbubp_bright_r1vqvs.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720815/q_seychelles_blue_cflbp_gbubp_dark_plate_isxygp.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720810/q_seychelles_blue_cflbp_gbubp_dark_plate_information_oa0vya.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720961/q_seychelles_blue_cflbp_cfubp_dark_swhjn4.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720958/q_seychelles_blue_cflbp_cfubp_dark_plate_dhuvvj.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720956/q_seychelles_blue_cflbp_cfubp_dark_plate_information_dnk8z2.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

     }
       
    
    //q ion blue
    
    if (exteriorcolor === 'qionblue' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753660/q_ion_blue_bclbp_bcubp_dark_ptnmju.jpg";
      
      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753658/q_ion_blue_bclbp_bcubp_dark_plate_hk8wv9.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753657/q_ion_blue_bclbp_bcubp_dark_plate_information_cox9rd.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";


    }

    if (exteriorcolor === 'qionblue' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753651/q_ion_blue_bclbp_gbubp_dark_jdfruj.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753649/q_ion_blue_bclbp_gbubp_dark_plate_i1lx2e.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";
      
     
      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753647/q_ion_blue_bclbp_gbubp_dark_plate_information_ihepem.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";



    }

    if (exteriorcolor === 'qionblue' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753552/q_ion_blue_gblbp_bcubp_dark_wak1em.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753550/q_ion_blue_gblbp_bcubp_dark_plate_w8m2oz.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";


      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753549/q_ion_blue_gblbp_bcubp_dark_plate_information_wggqdd.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'qionblue' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753543/q_ion_blue_gblbp_gbubp_dark_bhr87g.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753541/q_ion_blue_gblbp_gbubp_dark_plate_ojtcy5.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753539/q_ion_blue_gblbp_gbubp_dark_plate_information_l8e5s9.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'qionblue' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753579/q_ion_blue_cflbp_bcubp_dark_zfy5sl.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753578/q_ion_blue_cflbp_bcubp_dark_plate_gmoh7f.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";


      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753576/q_ion_blue_cflbp_bcubp_dark_plate_information_atnirl.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'qionblue' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753561/q_ion_blue_cflbp_gbubp_dark_akzipk.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_ion_blue_cflbp_gbubp_dark_plate.jpghttps://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753559/q_ion_blue_cflbp_gbubp_dark_plate_e2kb4e.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

     

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753558/q_ion_blue_cflbp_gbubp_dark_plate_information_dg2uav.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'qionblue' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753570/q_ion_blue_cflbp_cfubp_dark_u45ok4.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753568/q_ion_blue_cflbp_cfubp_dark_plate_ucpjai.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753567/q_ion_blue_cflbp_cfubp_dark_plate_information_t3itkt.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    ///  plasma blue
    if (exteriorcolor === 'plasmablue' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720761072/plasma_blue_bclbp_bcubp_dark_airer9.jpg";
      
      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720761066/plasma_blue_bclbp_bcubp_dark_plate_hqgxjs.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760973/plasma_blue_bclbp_bcubp_dark_plate_information_zue2ym.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";


    }

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760944/plasma_blue_bclbp_gbubp_dark_qpuz1f.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760950/plasma_blue_bclbp_gbubp_dark_plate_lndu3e.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";
      
     
      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760938/plasma_blue_bclbp_gbubp_dark_plate_information_qc5xat.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";



    }

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760356/plasma_blue_gblbp_bcubp_dark_zejkhc.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760350/plasma_blue_gblbp_bcubp_dark_plate_rga0pt.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";


      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760345/plasma_blue_gblbp_bcubp_dark_plate_information_x26fwf.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760323/plasma_blue_gblbp_gbubp_dark_iihz21.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760318/plasma_blue_gblbp_gbubp_dark_plate_gxo7an.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760312/plasma_blue_gblbp_gbubp_dark_plate_information_wjmg7o.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760457/plasma_blue_cflbp_bcubp_dark_v6iwdb.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760451/plasma_blue_cflbp_bcubp_dark_plate_m5jbrv.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";


      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760445/plasma_blue_cflbp_bcubp_dark_plate_information_ucj9oj.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760388/plasma_blue_cflbp_gbubp_dark_mrfgxa.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760383/plasma_blue_cflbp_gbubp_dark_plate_fapopp.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

     

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760377/plasma_blue_cflbp_gbubp_dark_plate_information_uia3no.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760423/plasma_blue_cflbp_cfubp_dark_ad8qcx.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760417/plasma_blue_cflbp_cfubp_dark_plate_aoh6ee.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760411/plasma_blue_cflbp_cfubp_dark_plate_information_m0oxal.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    // elwood blue

    if (exteriorcolor === 'elwoodblue' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765414/elwood_blue_bclbp_bcubp_dark_b7yyvi.jpg";
      
      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765404/elwood_blue_bclbp_bcubp_dark_plate_emp9ap.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765394/elwood_blue_bclbp_bcubp_dark_plate_information_hqsnob.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";


    }

    if (exteriorcolor === 'elwoodblue' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765346/elwood_blue_bclbp_gbubp_dark_jl8svs.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765337/elwood_blue_bclbp_gbubp_dark_plate_ptxuop.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";
      
     
      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765327/elwood_blue_bclbp_gbubp_dark_plate_information_hyal8y.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";



    }

    if (exteriorcolor === 'elwoodblue' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764197/elwood_blue_gblbp_bcubp_dark_kvkjxi.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764187/elwood_blue_gblbp_bcubp_dark_plate_bxykip.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";


      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764177/elwood_blue_gblbp_bcubp_dark_plate_information_x1xyxf.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'elwoodblue' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764130/elwood_blue_gblbp_gbubp_dark_hmnttc.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764139/elwood_blue_gblbp_gbubp_dark_plate_m0avrd.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764120/elwood_blue_gblbp_gbubp_dark_plate_information_uas9uq.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'elwoodblue' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764891/elwood_blue_cflbp_bcubp_dark_vttnsl.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764881/elwood_blue_cflbp_bcubp_dark_plate_snm59n.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";


      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764872/elwood_blue_cflbp_bcubp_dark_plate_information_qkv5pt.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'elwoodblue' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764254/elwood_blue_cflbp_gbubp_dark_sgwknr.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764244/elwood_blue_cflbp_gbubp_dark_plate_u2jgev.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

     

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764235/elwood_blue_cflbp_gbubp_dark_plate_information_lybknu.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'elwoodblue' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764836/elwood_blue_cflbp_cfubp_dark_d9iosu.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764784/elwood_blue_cflbp_cfubp_dark_plate_pi83kp.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764294/elwood_blue_cflbp_cfubp_dark_plate_information_v7ts2t.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    // q digital violet

    if (exteriorcolor === 'stormpurple' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771411/storm_purple_bclbp_bcubp_dark_ektzrp.jpg";
      
      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771416/storm_purple_bclbp_bcubp_dark_plate_tkf33q.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771405/storm_purple_bclbp_bcubp_dark_plate_information_jvflb6.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";


    }

    if (exteriorcolor === 'stormpurple' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771384/storm_purple_bclbp_gbubp_dark_mzjczp.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771379/storm_purple_bclbp_gbubp_dark_plate_wfksrl.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";
      
     
      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771373/storm_purple_bclbp_gbubp_dark_plate_information_asrney.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";



    }

    if (exteriorcolor === 'stormpurple' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770975/storm_purple_gblbp_bcubp_dark_zhmpd7.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770969/storm_purple_gblbp_bcubp_dark_plate_o1hnif.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";


      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770965/storm_purple_gblbp_bcubp_dark_plate_information_arcyoq.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'stormpurple' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770944/storm_purple_gblbp_gbubp_dark_fzhze2.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770939/storm_purple_gblbp_gbubp_dark_plate_koturm.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770933/storm_purple_gblbp_gbubp_dark_plate_information_ryguii.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'stormpurple' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771064/storm_purple_cflbp_bcubp_dark_bc6v8o.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771069/storm_purple_cflbp_bcubp_dark_plate_lbu9ak.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";


      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771058/storm_purple_cflbp_bcubp_dark_plate_information_pqzx00.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'stormpurple' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771006/storm_purple_cflbp_gbubp_dark_ahcdo4.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771001/storm_purple_cflbp_gbubp_dark_plate_okoyrs.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

     

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770996/storm_purple_cflbp_gbubp_dark_plate_information_mpx89i.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'stormpurple' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771037/storm_purple_cflbp_cfubp_dark_foompj.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771032/storm_purple_cflbp_cfubp_dark_plate_lxvxzz.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771027/storm_purple_cflbp_cfubp_dark_plate_information_cdvkzm.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

     // storm purple

     if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769544/q_digital_violet_bclbp_bcubp_dark_tpxgnp.jpg";
      
      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769542/q_digital_violet_bclbp_bcubp_dark_plate_qst8yf.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769540/q_digital_violet_bclbp_bcubp_dark_plate_information_xbz2vl.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";


    }

    if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769532/q_digital_violet_bclbp_gbubp_dark_g7dtqi.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769530/q_digital_violet_bclbp_gbubp_dark_plate_qvjvdz.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";
      
     
      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769527/q_digital_violet_bclbp_gbubp_dark_plate_information_qfnvpf.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";



    }

    if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769407/q_digital_violet_gblbp_bcubp_dark_q1diik.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769404/q_digital_violet_gblbp_bcubp_dark_plate_eahqkd.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";


      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/q_auto/v1720769402/q_digital_violet_gblbp_bcubp_dark_plate_information_zlb7hp.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/q_auto/v1720769395/q_digital_violet_gblbp_gbubp_dark_ovuclh.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/q_auto/v1720769393/q_digital_violet_gblbp_gbubp_dark_plate_cawsma.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/q_auto/v1720769391/q_digital_violet_gblbp_gbubp_dark_plate_information_iygrv4.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/q_auto/v1720769442/q_digital_violet_cflbp_bcubp_dark_fuku5h.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/q_auto/v1720769440/q_digital_violet_cflbp_bcubp_dark_plate_wdeoz7.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";


      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/q_auto/v1720769438/q_digital_violet_cflbp_bcubp_dark_plate_information_kfedqc.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/q_auto/v1720769419/q_digital_violet_cflbp_gbubp_dark_rv7yza.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/q_auto/v1720769416/q_digital_violet_cflbp_gbubp_dark_plate_mzcmfh.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

     

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/q_auto/v1720769414/q_digital_violet_cflbp_gbubp_dark_plate_information_c59djf.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/q_auto/v1720769431/q_digital_violet_cflbp_cfubp_dark_gkkpyt.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/q_auto/v1720769428/q_digital_violet_cflbp_cfubp_dark_plate_p5rk3o.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      

      document.querySelector('#colorimage img').src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/q_auto/v1720769426/q_digital_violet_cflbp_cfubp_dark_plate_information_jvldlo.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    
    
  }

  return (<>
    <div id="grillefinishpackagediv">
      <div id="grillefinishpackage">
        <div id="grillefinishpackageplatesdiv">

          <div id="grillefinishpackageimagesplate">
            <div className="grillefinishpackagehoverhider" id="grillefinishcolorborderone"><img src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879495/q_buckinghamshire_green_bclbp_bcubp_bright_plate_p023vr.jpg" className="grillefinishbodyscaling" alt="" id="grillefinishbodycolorone" onClick={Bright} /></div>
            <div className="grillefinishpackagehoverhider" id="grillefinishcolorbordertwo"><img src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879494/q_buckinghamshire_green_bclbp_bcubp_dark_plate_nfnj1b.jpg" alt="" className="grillefinishbodyscaling" id="grillefinishbodycolortwo" onClick={Dark} /></div>

          </div>
        </div>
        <div id="grillefinishpackageimageinformationsection">
          <div id="grillefinishpackageimagewithinfo">
            <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879495/q_buckinghamshire_green_bclbp_bcubp_bright_plate_p023vr.jpg" alt="" id="currentgrillefinishbodyinfoimage" />
            <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879541/infobutton_admoia.png" alt="" id="infobuttonforgrillefinishbody" onClick={showinfofunction} />
          </div>
          <div id="grillefinishpackageinformationcontent">
            <div id="grillefinishpackagename">Bright</div>
          </div>
        </div>
      </div>
    </div>

 <Roof selectedSeat={selectedSeat} selectedprimarycolor={selectedprimarycolor} selectedsecondarycolor={selectedsecondarycolor} showinfofunction={showinfofunction} exteriorcolor={exteriorcolor} lowerpackage={lowerpackage} upperpackage={upperpackage}  grille ={grille} setgrille={setgrille}/>
  </>)
}

export default GrilleFinish;