

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
  document.querySelector("#grillefinishbodycolorone").src = "q_quantum_silver_bclbp_bcubp_bright_plate.jpg";
  document.querySelector("#grillefinishbodycolortwo").src = "q_quantum_silver_bclbp_bcubp_dark_plate.jpg";


 

  document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_quantum_silver_bclbp_bcubp_bright_plate.jpg";
  document.querySelector('#colorimage img').src = "q_quantum_silver_bclbp_bcubp_bright_plate_information.jpg";

}
if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
  document.querySelector("#grillefinishbodycolorone").src = "q_quantum_silver_bclbp_gbubp_bright_plate.jpg";
  document.querySelector("#grillefinishbodycolortwo").src = "q_quantum_silver_bclbp_gbubp_dark_plate.jpg";



  document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_quantum_silver_bclbp_gbubp_bright_plate.jpg";
  document.querySelector('#colorimage img').src = "q_quantum_silver_bclbp_gbubp_bright_plate_information.jpg";

}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
  document.querySelector("#grillefinishbodycolorone").src = "q_quantum_silver_gblbp_bcubp_bright_plate.jpg";
  document.querySelector("#grillefinishbodycolortwo").src = "q_quantum_silver_gblbp_bcubp_dark_plate.jpg";





  document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_quantum_silver_gblbp_bcubp_bright_plate.jpg";
  document.querySelector('#colorimage img').src = "q_quantum_silver_gblbp_bcubp_bright_plate_information.jpg";

}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
  document.querySelector("#grillefinishbodycolorone").src = "q_quantum_silver_gblbp_gbubp_bright_plate.jpg";
  document.querySelector("#grillefinishbodycolortwo").src = "q_quantum_silver_gblbp_gbubp_dark_plate.jpg";


 


  document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_quantum_silver_gblbp_gbubp_bright_plate.jpg";
  document.querySelector('#colorimage img').src = "q_quantum_silver_gblbp_gbubp_bright_plate_information.jpg";

}
if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
  document.querySelector("#grillefinishbodycolorone").src = "q_quantum_silver_cflbp_bcubp_bright_plate.jpg";
  document.querySelector("#grillefinishbodycolortwo").src = "q_quantum_silver_cflbp_bcubp_dark_plate.jpg";





  document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_quantum_silver_cflbp_bcubp_bright_plate.jpg";
  document.querySelector('#colorimage img').src = "q_quantum_silver_cflbp_bcubp_bright_plate_information.jpg";

}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
  document.querySelector("#grillefinishbodycolorone").src = "q_quantum_silver_cflbp_gbubp_bright_plate.jpg";
  document.querySelector("#grillefinishbodycolortwo").src = "q_quantum_silver_cflbp_gbubp_dark_plate.jpg";




  document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_quantum_silver_cflbp_gbubp_bright_plate.jpg";
  document.querySelector('#colorimage img').src = "q_quantum_silver_cflbp_gbubp_bright_plate_information.jpg";

}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
  document.querySelector("#grillefinishbodycolorone").src = "q_quantum_silver_cflbp_cfubp_bright_plate.jpg";
  document.querySelector("#grillefinishbodycolortwo").src = "q_quantum_silver_cflbp_cfubp_dark_plate.jpg";





  document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_quantum_silver_cflbp_cfubp_bright_plate.jpg";
  document.querySelector('#colorimage img').src = "q_quantum_silver_cflbp_cfubp_bright_plate_information.jpg";

}

// q satin xenon grey
  if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "q_satin_xenon_grey_bclbp_bcubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_satin_xenon_grey_bclbp_bcubp_dark_plate.jpg";


   

    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_xenon_grey_bclbp_bcubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_satin_xenon_grey_bclbp_bcubp_bright_plate_information.jpg";

  }
  if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "q_satin_xenon_grey_bclbp_gbubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_satin_xenon_grey_bclbp_gbubp_dark_plate.jpg";


   

    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_xenon_grey_bclbp_gbubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_satin_xenon_grey_bclbp_gbubp_bright_plate_information.jpg";

  }

  if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "q_satin_xenon_grey_gblbp_bcubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_satin_xenon_grey_gblbp_bcubp_dark_plate.jpg";





    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_xenon_grey_gblbp_bcubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_satin_xenon_grey_gblbp_bcubp_bright_plate_information.jpg";

  }

  if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "q_satin_xenon_grey_gblbp_gbubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_satin_xenon_grey_gblbp_gbubp_dark_plate.jpg";


 


    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_xenon_grey_gblbp_gbubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_satin_xenon_grey_gblbp_gbubp_bright_plate_information.jpg";

  }
  if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "q_satin_xenon_grey_cflbp_bcubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_satin_xenon_grey_cflbp_bcubp_dark_plate.jpg";


    


    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_xenon_grey_cflbp_bcubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_satin_xenon_grey_cflbp_bcubp_bright_plate_information.jpg";

  }

  if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "q_satin_xenon_grey_cflbp_gbubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_satin_xenon_grey_cflbp_gbubp_dark_plate.jpg";





    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_xenon_grey_cflbp_gbubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_satin_xenon_grey_cflbp_gbubp_bright_plate_information.jpg";

  }

  if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
    document.querySelector("#grillefinishbodycolorone").src = "q_satin_xenon_grey_cflbp_cfubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_satin_xenon_grey_cflbp_cfubp_dark_plate.jpg";


 


    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_xenon_grey_cflbp_cfubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_satin_xenon_grey_cflbp_cfubp_bright_plate_information.jpg";

  }


  // q casino royale 



  if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "q_casino_royale_bclbp_bcubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_casino_royale_bclbp_bcubp_dark_plate.jpg";




    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_casino_royale_bclbp_bcubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_casino_royale_bclbp_bcubp_bright_plate_information.jpg";

  }
  if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "q_casino_royale_bclbp_gbubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_casino_royale_bclbp_gbubp_dark_plate.jpg";




    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_casino_royale_bclbp_gbubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_casino_royale_bclbp_gbubp_bright_plate_information.jpg";

  }

  if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "q_casino_royale_gblbp_bcubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_casino_royale_gblbp_bcubp_dark_plate.jpg";




    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_casino_royale_gblbp_bcubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_casino_royale_gblbp_bcubp_bright_plate_information.jpg";

  }

  if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "q_casino_royale_gblbp_gbubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_casino_royale_gblbp_gbubp_dark_plate.jpg";





    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_casino_royale_gblbp_gbubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_casino_royale_gblbp_gbubp_bright_plate_information.jpg";

  }
  if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "q_casino_royale_cflbp_bcubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_casino_royale_cflbp_bcubp_dark_plate.jpg";


   


    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_casino_royale_cflbp_bcubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_casino_royale_cflbp_bcubp_bright_plate_information.jpg";

  }

  if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "q_casino_royale_cflbp_gbubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_casino_royale_cflbp_gbubp_dark_plate.jpg";




    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_casino_royale_cflbp_gbubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_casino_royale_cflbp_gbubp_bright_plate_information.jpg";

  }

  if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
    document.querySelector("#grillefinishbodycolorone").src = "q_casino_royale_cflbp_cfubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_casino_royale_cflbp_cfubp_dark_plate.jpg";




    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_casino_royale_cflbp_cfubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_casino_royale_cflbp_cfubp_bright_plate_information.jpg";

  }
  // q satin titanium grey


  if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "q_satin_titanium_grey_bclbp_bcubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_satin_titanium_grey_bclbp_bcubp_dark_plate.jpg";


    // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "2px solid white";
    //  document.querySelector("#grillefinishcolorbordertwo").src="q_satin_xenon_grey_bclbp_bcubp_dark_plate.jpg";

    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_titanium_grey_bclbp_bcubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_satin_titanium_grey_bclbp_bcubp_bright_plate_information.jpg";

  }
  if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "q_satin_titanium_grey_bclbp_gbubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_satin_titanium_grey_bclbp_gbubp_dark_plate.jpg";


    // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "2px solid white";
    //  document.querySelector("#grillefinishcolorbordertwo").src="q_satin_xenon_grey_bclbp_bcubp_dark_plate.jpg";

    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_titanium_grey_bclbp_gbubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_satin_titanium_grey_bclbp_gbubp_bright_plate_information.jpg";

  }

  if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "q_satin_titanium_grey_gblbp_bcubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_satin_titanium_grey_gblbp_bcubp_dark_plate.jpg";


    // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "2px solid white";


    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_titanium_grey_gblbp_bcubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_satin_titanium_grey_gblbp_bcubp_bright_plate_information.jpg";

  }

  if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "q_satin_titanium_grey_gblbp_gbubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_satin_titanium_grey_gblbp_gbubp_dark_plate.jpg";


    // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "2px solid white";


    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_titanium_grey_gblbp_gbubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_satin_titanium_grey_gblbp_gbubp_bright_plate_information.jpg";

  }
  if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "q_satin_titanium_grey_cflbp_bcubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_satin_titanium_grey_cflbp_bcubp_dark_plate.jpg";


   


    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_titanium_grey_cflbp_bcubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_satin_titanium_grey_cflbp_bcubp_bright_plate_information.jpg";

  }

  if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "q_satin_titanium_grey_cflbp_gbubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_satin_titanium_grey_cflbp_gbubp_dark_plate.jpg";





    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_titanium_grey_cflbp_gbubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_satin_titanium_grey_cflbp_gbubp_bright_plate_information.jpg";

  }

  if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
    document.querySelector("#grillefinishbodycolorone").src = "q_satin_titanium_grey_cflbp_cfubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_satin_titanium_grey_cflbp_cfubp_dark_plate.jpg";





    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_titanium_grey_cflbp_cfubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_satin_titanium_grey_cflbp_cfubp_bright_plate_information.jpg";

  }


  // q seychelles blue
  if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "q_seychelles_blue_bclbp_bcubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_seychelles_blue_bclbp_bcubp_dark_plate.jpg";


    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_bclbp_bcubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_seychelles_blue_bclbp_bcubp_bright_plate_information.jpg";

  }
  if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "q_seychelles_blue_bclbp_gbubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_seychelles_blue_bclbp_gbubp_dark_plate.jpg";




    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_bclbp_gbubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_seychelles_blue_bclbp_gbubp_bright_plate_information.jpg";

  }

  if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "q_seychelles_blue_gblbp_bcubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_seychelles_blue_gblbp_bcubp_dark_plate.jpg";




    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_gblbp_bcubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_seychelles_blue_gblbp_bcubp_bright_plate_information.jpg";

  }

  if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "q_seychelles_blue_gblbp_gbubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_seychelles_blue_gblbp_gbubp_dark_plate.jpg";


   


    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_gblbp_gbubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_seychelles_blue_gblbp_gbubp_bright_plate_information.jpg";

  }
  if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "q_seychelles_blue_cflbp_bcubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_seychelles_blue_cflbp_bcubp_dark_plate.jpg";




    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_cflbp_bcubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_seychelles_blue_cflbp_bcubp_bright_plate_information.jpg";

  }

  if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "q_seychelles_blue_cflbp_gbubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_seychelles_blue_cflbp_gbubp_dark_plate.jpg";





    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_cflbp_gbubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_seychelles_blue_cflbp_gbubp_bright_plate_information.jpg";

  }

  if (exteriorcolor === 'qseychelles_blue' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
    document.querySelector("#grillefinishbodycolorone").src = "q_seychelles_blue_cflbp_cfubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_seychelles_blue_cflbp_cfubp_dark_plate.jpg";





    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_cflbp_cfubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_seychelles_blue_cflbp_cfubp_bright_plate_information.jpg";

  }

  // q ion blue 
  if (exteriorcolor === 'qionblue' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "q_ion_blue_bclbp_bcubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_ion_blue_bclbp_bcubp_dark_plate.jpg";
  
  
   
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_ion_blue_bclbp_bcubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_ion_blue_bclbp_bcubp_bright_plate_information.jpg";
  
  }
  if (exteriorcolor === 'qionblue' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "q_ion_blue_bclbp_gbubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_ion_blue_bclbp_gbubp_dark_plate.jpg";
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_ion_blue_bclbp_gbubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_ion_blue_bclbp_gbubp_bright_plate_information.jpg";
  
  }
  
  if (exteriorcolor === 'qionblue' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "q_ion_blue_gblbp_bcubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_ion_blue_gblbp_bcubp_dark_plate.jpg";
  
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_ion_blue_gblbp_bcubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_ion_blue_gblbp_bcubp_bright_plate_information.jpg";
  
  }
  
  if (exteriorcolor === 'qionblue' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "q_ion_blue_gblbp_gbubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_ion_blue_gblbp_gbubp_dark_plate.jpg";
  
  
   
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_ion_blue_gblbp_gbubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_ion_blue_gblbp_gbubp_bright_plate_information.jpg";
  
  }
  if (exteriorcolor === 'qionblue' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "q_ion_blue_cflbp_bcubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_ion_blue_cflbp_bcubp_dark_plate.jpg";
  
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_ion_blue_cflbp_bcubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_ion_blue_cflbp_bcubp_bright_plate_information.jpg";
  
  }
  
  if (exteriorcolor === 'qionblue' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "q_ion_blue_cflbp_gbubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_ion_blue_cflbp_gbubp_dark_plate.jpg";
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_ion_blue_cflbp_gbubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_ion_blue_cflbp_gbubp_bright_plate_information.jpg";
  
  }
  
  if (exteriorcolor === 'qionblue' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
    document.querySelector("#grillefinishbodycolorone").src = "q_ion_blue_cflbp_cfubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_ion_blue_cflbp_cfubp_dark_plate.jpg";
  
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_ion_blue_cflbp_cfubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_ion_blue_cflbp_cfubp_bright_plate_information.jpg";
  
  }

  // plasma blue


  if (exteriorcolor === 'plasmablue' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "plasma_blue_bclbp_bcubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "plasma_blue_bclbp_bcubp_dark_plate.jpg";
  
  
   
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "plasma_blue_bclbp_bcubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "plasma_blue_bclbp_bcubp_bright_plate_information.jpg";
  
  }
  if (exteriorcolor === 'plasmablue' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "plasma_blue_bclbp_gbubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "plasma_blue_bclbp_gbubp_dark_plate.jpg";
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "plasma_blue_bclbp_gbubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "plasma_blue_bclbp_gbubp_bright_plate_information.jpg";
  
  }
  
  if (exteriorcolor === 'plasmablue' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "plasma_blue_gblbp_bcubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "plasma_blue_gblbp_bcubp_dark_plate.jpg";
  
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "plasma_blue_gblbp_bcubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "plasma_blue_gblbp_bcubp_bright_plate_information.jpg";
  
  }
  
  if (exteriorcolor === 'plasmablue' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "plasma_blue_gblbp_gbubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "plasma_blue_gblbp_gbubp_dark_plate.jpg";
  
  
   
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "plasma_blue_gblbp_gbubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "plasma_blue_gblbp_gbubp_bright_plate_information.jpg";
  
  }
  if (exteriorcolor === 'plasmablue' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "plasma_blue_cflbp_bcubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "plasma_blue_cflbp_bcubp_dark_plate.jpg";
  
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "plasma_blue_cflbp_bcubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "plasma_blue_cflbp_bcubp_bright_plate_information.jpg";
  
  }
  
  if (exteriorcolor === 'plasmablue' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "plasma_blue_cflbp_gbubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "plasma_blue_cflbp_gbubp_dark_plate.jpg";
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "plasma_blue_cflbp_gbubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "plasma_blue_cflbp_gbubp_bright_plate_information.jpg";
  
  }
  
  if (exteriorcolor === 'plasmablue' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
    document.querySelector("#grillefinishbodycolorone").src = "plasma_blue_cflbp_cfubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "plasma_blue_cflbp_cfubp_dark_plate.jpg";
  
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "plasma_blue_cflbp_cfubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "plasma_blue_cflbp_cfubp_bright_plate_information.jpg";
  
  }


  // elwood blue

  if (exteriorcolor === 'elwoodblue' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "elwood_blue_bclbp_bcubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "elwood_blue_bclbp_bcubp_dark_plate.jpg";
  
  
   
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "elwood_blue_bclbp_bcubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "elwood_blue_bclbp_bcubp_bright_plate_information.jpg";
  
  }
  if (exteriorcolor === 'elwoodblue' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "elwood_blue_bclbp_gbubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "elwood_blue_bclbp_gbubp_dark_plate.jpg";
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "elwood_blue_bclbp_gbubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "elwood_blue_bclbp_gbubp_bright_plate_information.jpg";
  
  }
  
  if (exteriorcolor === 'elwoodblue' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "elwood_blue_gblbp_bcubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "elwood_blue_gblbp_bcubp_dark_plate.jpg";
  
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "elwood_blue_gblbp_bcubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "elwood_blue_gblbp_bcubp_bright_plate_information.jpg";
  
  }
  
  if (exteriorcolor === 'elwoodblue' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "elwood_blue_gblbp_gbubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "elwood_blue_gblbp_gbubp_dark_plate.jpg";
  
  
   
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "elwood_blue_gblbp_gbubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "elwood_blue_gblbp_gbubp_bright_plate_information.jpg";
  
  }
  if (exteriorcolor === 'elwoodblue' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "elwood_blue_cflbp_bcubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "elwood_blue_cflbp_bcubp_dark_plate.jpg";
  
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "elwood_blue_cflbp_bcubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "elwood_blue_cflbp_bcubp_bright_plate_information.jpg";
  
  }
  
  if (exteriorcolor === 'elwoodblue' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "elwood_blue_cflbp_gbubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "elwood_blue_cflbp_gbubp_dark_plate.jpg";
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "elwood_blue_cflbp_gbubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "elwood_blue_cflbp_gbubp_bright_plate_information.jpg";
  
  }
  
  if (exteriorcolor === 'elwoodblue' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
    document.querySelector("#grillefinishbodycolorone").src = "elwood_blue_cflbp_cfubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "elwood_blue_cflbp_cfubp_dark_plate.jpg";
  
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "elwood_blue_cflbp_cfubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "elwood_blue_cflbp_cfubp_bright_plate_information.jpg";
  
  }

  // q digital violet

  if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "q_digital_violet_bclbp_bcubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_digital_violet_bclbp_bcubp_dark_plate.jpg";
  
  
   
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_digital_violet_bclbp_bcubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_digital_violet_bclbp_bcubp_bright_plate_information.jpg";
  
  }
  if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "q_digital_violet_bclbp_gbubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_digital_violet_bclbp_gbubp_dark_plate.jpg";
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_digital_violet_bclbp_gbubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_digital_violet_bclbp_gbubp_bright_plate_information.jpg";
  
  }
  
  if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "q_digital_violet_gblbp_bcubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_digital_violet_gblbp_bcubp_dark_plate.jpg";
  
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_digital_violet_gblbp_bcubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_digital_violet_gblbp_bcubp_bright_plate_information.jpg";
  
  }
  
  if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "q_digital_violet_gblbp_gbubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_digital_violet_gblbp_gbubp_dark_plate.jpg";
  
  
   
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_digital_violet_gblbp_gbubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_digital_violet_gblbp_gbubp_bright_plate_information.jpg";
  
  }
  if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "q_digital_violet_cflbp_bcubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_digital_violet_cflbp_bcubp_dark_plate.jpg";
  
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_digital_violet_cflbp_bcubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_digital_violet_cflbp_bcubp_bright_plate_information.jpg";
  
  }
  
  if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "q_digital_violet_cflbp_gbubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_digital_violet_cflbp_gbubp_dark_plate.jpg";
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_digital_violet_cflbp_gbubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_digital_violet_cflbp_gbubp_bright_plate_information.jpg";
  
  }
  
  if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
    document.querySelector("#grillefinishbodycolorone").src = "q_digital_violet_cflbp_cfubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "q_digital_violet_cflbp_cfubp_dark_plate.jpg";
  
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_digital_violet_cflbp_cfubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "q_digital_violet_cflbp_cfubp_bright_plate_information.jpg";
  
  }

  // storm purple 

  if (exteriorcolor === 'stormpurple' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "storm_purple_bclbp_bcubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "storm_purple_bclbp_bcubp_dark_plate.jpg";
  
  
   
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "storm_purple_bclbp_bcubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "storm_purple_bclbp_bcubp_bright_plate_information.jpg";
  
  }
  if (exteriorcolor === 'stormpurple' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "storm_purple_bclbp_gbubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "storm_purple_bclbp_gbubp_dark_plate.jpg";
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "storm_purple_bclbp_gbubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "storm_purple_bclbp_gbubp_bright_plate_information.jpg";
  
  }
  
  if (exteriorcolor === 'stormpurple' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "storm_purple_gblbp_bcubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "storm_purple_gblbp_bcubp_dark_plate.jpg";
  
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "storm_purple_gblbp_bcubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "storm_purple_gblbp_bcubp_bright_plate_information.jpg";
  
  }
  
  if (exteriorcolor === 'stormpurple' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "storm_purple_gblbp_gbubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "storm_purple_gblbp_gbubp_dark_plate.jpg";
  
  
   
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "storm_purple_gblbp_gbubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "storm_purple_gblbp_gbubp_bright_plate_information.jpg";
  
  }
  if (exteriorcolor === 'stormpurple' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
    document.querySelector("#grillefinishbodycolorone").src = "storm_purple_cflbp_bcubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "storm_purple_cflbp_bcubp_dark_plate.jpg";
  
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "storm_purple_cflbp_bcubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "storm_purple_cflbp_bcubp_bright_plate_information.jpg";
  
  }
  
  if (exteriorcolor === 'stormpurple' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
    document.querySelector("#grillefinishbodycolorone").src = "storm_purple_cflbp_gbubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "storm_purple_cflbp_gbubp_dark_plate.jpg";
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "storm_purple_cflbp_gbubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "storm_purple_cflbp_gbubp_bright_plate_information.jpg";
  
  }
  
  if (exteriorcolor === 'stormpurple' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
    document.querySelector("#grillefinishbodycolorone").src = "storm_purple_cflbp_cfubp_bright_plate.jpg";
    document.querySelector("#grillefinishbodycolortwo").src = "storm_purple_cflbp_cfubp_dark_plate.jpg";
  
  
  
  
  
    document.querySelector("#currentgrillefinishbodyinfoimage").src = "storm_purple_cflbp_cfubp_bright_plate.jpg";
    document.querySelector('#colorimage img').src = "storm_purple_cflbp_cfubp_bright_plate_information.jpg";
  
  }




  const Bright = () => {

    setgrille('bright')

    if (exteriorcolor === 'qbuckinghamshiregreen' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_buckinghamshire_green_bclbp_bcubp_bright.jpg"
    }

// q quantum silver
if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
  document.querySelector("#img1").src = "q_quantum_silver_bclbp_bcubp_bright.jpg";

  document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_quantum_silver_bclbp_bcubp_bright_plate.jpg";
  document.querySelector("#grillefinishpackagename").innerHTML = "Bright";


  document.querySelector('#colorimage img').src = "q_quantum_silver_bclbp_bcubp_bright_plate_information.jpg";
  document.querySelector("#colorcardcolorname").innerHTML = "Bright";
  document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";



}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
  document.querySelector("#img1").src = "q_quantum_silver_bclbp_gbubp_bright.jpg";

  document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_quantum_silver_bclbp_gbubp_bright_plate.jpg";
  document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

  


  document.querySelector('#colorimage img').src = "q_quantum_silver_bclbp_gbubp_bright_plate_information.jpg";
  document.querySelector("#colorcardcolorname").innerHTML = "Bright";
  document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";



}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
  document.querySelector("#img1").src = "q_quantum_silver_gblbp_bcubp_bright.jpg";

  document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_quantum_silver_gblbp_bcubp_bright_plate.jpg";
  document.querySelector("#grillefinishpackagename").innerHTML = "Bright";



  document.querySelector('#colorimage img').src = "q_quantum_silver_gblbp_bcubp_bright_plate_information.jpg";
  document.querySelector("#colorcardcolorname").innerHTML = "Bright";
  document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
  document.querySelector("#img1").src = "q_quantum_silver_gblbp_gbubp_bright.jpg";

  document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_quantum_silver_gblbp_gbubp_bright_plate.jpg";
  document.querySelector("#grillefinishpackagename").innerHTML = "Bright";


  document.querySelector('#colorimage img').src = "q_quantum_silver_gblbp_gbubp_bright_plate_information.jpg";
  document.querySelector("#colorcardcolorname").innerHTML = "Bright";
  document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
  document.querySelector("#img1").src = "q_quantum_silver_cflbp_bcubp_bright.jpg";

  document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_quantum_silver_cflbp_bcubp_bright_plate.jpg";
  document.querySelector("#grillefinishpackagename").innerHTML = "Bright";



  document.querySelector('#colorimage img').src = "q_quantum_silver_cflbp_bcubp_bright_plate_information.jpg";
  document.querySelector("#colorcardcolorname").innerHTML = "Bright";
  document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
  document.querySelector("#img1").src = "q_quantum_silver_cflbp_gbubp_bright.jpg";

  document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_quantum_silver_cflbp_gbubp_bright_plate.jpg";
  document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

 

  document.querySelector('#colorimage img').src = "q_quantum_silver_cflbp_gbubp_bright_plate_information.jpg";
  document.querySelector("#colorcardcolorname").innerHTML = "Bright";
  document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
  document.querySelector("#img1").src = "q_quantum_silver_cflbp_cfubp_bright.jpg";

  document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_quantum_silver_cflbp_cfubp_bright_plate.jpg";
  document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

  // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "2px solid white";
  // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "none";

  document.querySelector('#colorimage img').src = "q_quantum_silver_cflbp_cfubp_bright_plate_information.jpg";
  document.querySelector("#colorcardcolorname").innerHTML = "Bright";
  document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

}


    // q satin xenon grey
    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_satin_xenon_grey_bclbp_bcubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_xenon_grey_bclbp_bcubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     

      document.querySelector('#colorimage img').src = "q_satin_xenon_grey_bclbp_bcubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";



    }

    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_satin_xenon_grey_bclbp_gbubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_xenon_grey_bclbp_gbubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

    

      document.querySelector('#colorimage img').src = "q_satin_xenon_grey_bclbp_gbubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";



    }

    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_satin_xenon_grey_gblbp_bcubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_xenon_grey_gblbp_bcubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      

      document.querySelector('#colorimage img').src = "q_satin_xenon_grey_gblbp_bcubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
    }

    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_satin_xenon_grey_gblbp_gbubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_xenon_grey_gblbp_gbubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      
      document.querySelector('#colorimage img').src = "q_satin_xenon_grey_gblbp_gbubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_satin_xenon_grey_cflbp_bcubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_xenon_grey_cflbp_bcubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     

      document.querySelector('#colorimage img').src = "q_satin_xenon_grey_cflbp_bcubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
    }

    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_satin_xenon_grey_cflbp_gbubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_xenon_grey_cflbp_gbubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     

      document.querySelector('#colorimage img').src = "q_satin_xenon_grey_cflbp_gbubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "q_satin_xenon_grey_cflbp_cfubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_xenon_grey_cflbp_cfubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

   

      document.querySelector('#colorimage img').src = "q_satin_xenon_grey_cflbp_cfubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    // q_casino royale
    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_casino_royale_bclbp_bcubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_casino_royale_bclbp_bcubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     
      document.querySelector('#colorimage img').src = "q_casino_royale_bclbp_bcubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";



    }

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_casino_royale_bclbp_gbubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_casino_royale_bclbp_gbubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     

      document.querySelector('#colorimage img').src = "q_casino_royale_bclbp_gbubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";



    }

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_casino_royale_gblbp_bcubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_casino_royale_gblbp_bcubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      

      document.querySelector('#colorimage img').src = "q_casino_royale_gblbp_bcubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
    }

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_casino_royale_gblbp_gbubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_casino_royale_gblbp_gbubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      

      document.querySelector('#colorimage img').src = "q_casino_royale_gblbp_gbubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_casino_royale_cflbp_bcubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_casino_royale_cflbp_bcubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "2px solid white";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "none";
// 
      document.querySelector('#colorimage img').src = "q_casino_royale_cflbp_bcubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
    }

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_casino_royale_cflbp_gbubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_casino_royale_cflbp_gbubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      

      document.querySelector('#colorimage img').src = "q_casino_royale_cflbp_gbubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "q_casino_royale_cflbp_cfubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_casino_royale_cflbp_cfubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     

      document.querySelector('#colorimage img').src = "q_casino_royale_cflbp_cfubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    // q satin titanium grey bright

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_satin_titanium_grey_bclbp_bcubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_titanium_grey_bclbp_bcubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      

      document.querySelector('#colorimage img').src = "q_satin_titanium_grey_bclbp_bcubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";



    }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_satin_titanium_grey_bclbp_gbubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_titanium_grey_bclbp_gbubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      

      document.querySelector('#colorimage img').src = "q_satin_titanium_grey_bclbp_gbubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";



    }

    //continue from here 
    

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_satin_titanium_grey_gblbp_bcubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_titanium_grey_gblbp_bcubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      

      document.querySelector('#colorimage img').src = "q_satin_titanium_grey_gblbp_bcubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
    }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_satin_titanium_grey_gblbp_gbubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_titanium_grey_gblbp_gbubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      

      document.querySelector('#colorimage img').src = "q_satin_titanium_grey_gblbp_gbubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_satin_titanium_grey_cflbp_bcubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_titanium_grey_cflbp_bcubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      
      document.querySelector('#colorimage img').src = "q_satin_titanium_grey_cflbp_bcubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
    }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_satin_titanium_grey_cflbp_gbubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_titanium_grey_cflbp_gbubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     
      document.querySelector('#colorimage img').src = "q_satin_titanium_grey_cflbp_gbubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "q_satin_titanium_grey_cflbp_cfubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_titanium_grey_cflbp_cfubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     
      document.querySelector('#colorimage img').src = "q_satin_titanium_grey_cflbp_cfubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    // q seychelles blue

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_seychelles_blue_bclbp_bcubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_bclbp_bcubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "none";

      document.querySelector('#colorimage img').src = "q_seychelles_blue_bclbp_bcubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";



    }

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_seychelles_blue_bclbp_gbubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_bclbp_gbubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "none";

      document.querySelector('#colorimage img').src = "q_seychelles_blue_bclbp_gbubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";



    }

    //continue from here 
    

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_seychelles_blue_gblbp_bcubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_gblbp_bcubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      
      document.querySelector('#colorimage img').src = "q_seychelles_blue_gblbp_bcubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
    }

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_seychelles_blue_gblbp_gbubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_gblbp_gbubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "none";

      document.querySelector('#colorimage img').src = "q_seychelles_blue_gblbp_gbubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_seychelles_blue_cflbp_bcubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_cflbp_bcubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "none";

      document.querySelector('#colorimage img').src = "q_seychelles_blue_cflbp_bcubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
    }

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_seychelles_blue_cflbp_gbubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_cflbp_gbubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "none";

      document.querySelector('#colorimage img').src = "q_seychelles_blue_cflbp_gbubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "q_seychelles_blue_cflbp_cfubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_cflbp_cfubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     
      

      document.querySelector('#colorimage img').src = "q_seychelles_blue_cflbp_cfubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }


    // q ion blue
    
    if (exteriorcolor === 'qionblue' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_ion_blue_bclbp_bcubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_ion_blue_bclbp_bcubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     

      document.querySelector('#colorimage img').src = "q_ion_blue_bclbp_bcubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";



    }

    if (exteriorcolor === 'qionblue' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_ion_blue_bclbp_gbubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_ion_blue_bclbp_gbubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      

      document.querySelector('#colorimage img').src = "q_ion_blue_bclbp_gbubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";



    }
    

    if (exteriorcolor === 'qionblue' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_ion_blue_gblbp_bcubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_ion_blue_gblbp_bcubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     
      document.querySelector('#colorimage img').src = "q_ion_blue_gblbp_bcubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
    }

    if (exteriorcolor === 'qionblue' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_ion_blue_gblbp_gbubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_ion_blue_gblbp_gbubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

    

      document.querySelector('#colorimage img').src = "q_ion_blue_gblbp_gbubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    if (exteriorcolor === 'qionblue' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_ion_blue_cflbp_bcubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_ion_blue_cflbp_bcubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      

      document.querySelector('#colorimage img').src = "q_ion_blue_cflbp_bcubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
    }

    if (exteriorcolor === 'qionblue' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_ion_blue_cflbp_gbubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_ion_blue_cflbp_gbubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     

      document.querySelector('#colorimage img').src = "q_ion_blue_cflbp_gbubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    if (exteriorcolor === 'qionblue' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "q_ion_blue_cflbp_cfubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_ion_blue_cflbp_cfubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      

      document.querySelector('#colorimage img').src = "q_ion_blue_cflbp_cfubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    //plasma blue

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "plasma_blue_bclbp_bcubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "plasma_blue_bclbp_bcubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     

      document.querySelector('#colorimage img').src = "plasma_blue_bclbp_bcubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";



    }

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "plasma_blue_bclbp_gbubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "plasma_blue_bclbp_gbubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      

      document.querySelector('#colorimage img').src = "plasma_blue_bclbp_gbubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";



    }
    

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "plasma_blue_gblbp_bcubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "plasma_blue_gblbp_bcubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     
      document.querySelector('#colorimage img').src = "plasma_blue_gblbp_bcubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
    }

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "plasma_blue_gblbp_gbubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "plasma_blue_gblbp_gbubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

    

      document.querySelector('#colorimage img').src = "plasma_blue_gblbp_gbubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "plasma_blue_cflbp_bcubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "plasma_blue_cflbp_bcubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      

      document.querySelector('#colorimage img').src = "plasma_blue_cflbp_bcubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
    }

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "plasma_blue_cflbp_gbubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "plasma_blue_cflbp_gbubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

     

      document.querySelector('#colorimage img').src = "plasma_blue_cflbp_gbubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "plasma_blue_cflbp_cfubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "plasma_blue_cflbp_cfubp_bright_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Bright";

      

      document.querySelector('#colorimage img').src = "plasma_blue_cflbp_cfubp_bright_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Bright";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";

    }
      // elwood blue


      if (exteriorcolor === 'elwoodblue' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
        document.querySelector("#img1").src = "elwood_blue_bclbp_bcubp_bright.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "elwood_blue_bclbp_bcubp_bright_plate.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
       
  
        document.querySelector('#colorimage img').src = "elwood_blue_bclbp_bcubp_bright_plate_information.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
  
  
  
      }
  
      if (exteriorcolor === 'elwoodblue' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
        document.querySelector("#img1").src = "elwood_blue_bclbp_gbubp_bright.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "elwood_blue_bclbp_gbubp_bright_plate.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
        
  
        document.querySelector('#colorimage img').src = "elwood_blue_bclbp_gbubp_bright_plate_information.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
  
  
  
      }
      
  
      if (exteriorcolor === 'elwoodblue' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
        document.querySelector("#img1").src = "elwood_blue_gblbp_bcubp_bright.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "elwood_blue_gblbp_bcubp_bright_plate.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
       
        document.querySelector('#colorimage img').src = "elwood_blue_gblbp_bcubp_bright_plate_information.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
      }
  
      if (exteriorcolor === 'elwoodblue' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
        document.querySelector("#img1").src = "elwood_blue_gblbp_gbubp_bright.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "elwood_blue_gblbp_gbubp_bright_plate.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
      
  
        document.querySelector('#colorimage img').src = "elwood_blue_gblbp_gbubp_bright_plate_information.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
  
      }
  
      if (exteriorcolor === 'elwoodblue' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
        document.querySelector("#img1").src = "elwood_blue_cflbp_bcubp_bright.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "elwood_blue_cflbp_bcubp_bright_plate.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
        
  
        document.querySelector('#colorimage img').src = "elwood_blue_cflbp_bcubp_bright_plate_information.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
      }
  
      if (exteriorcolor === 'elwoodblue' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
        document.querySelector("#img1").src = "elwood_blue_cflbp_gbubp_bright.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "elwood_blue_cflbp_gbubp_bright_plate.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
       
  
        document.querySelector('#colorimage img').src = "elwood_blue_cflbp_gbubp_bright_plate_information.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
  
      }
  
      if (exteriorcolor === 'elwoodblue' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
        document.querySelector("#img1").src = "elwood_blue_cflbp_cfubp_bright.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "elwood_blue_cflbp_cfubp_bright_plate.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
        
  
        document.querySelector('#colorimage img').src = "elwood_blue_cflbp_cfubp_bright_plate_information.jpg";
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
        document.querySelector("#img1").src = "storm_purple_bclbp_bcubp_bright.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "storm_purple_bclbp_bcubp_bright_plate.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
       
  
        document.querySelector('#colorimage img').src = "storm_purple_bclbp_bcubp_bright_plate_information.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
  
  
  
      }
  
      if (exteriorcolor === 'stormpurple' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
        document.querySelector("#img1").src = "storm_purple_bclbp_gbubp_bright.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "storm_purple_bclbp_gbubp_bright_plate.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
        
  
        document.querySelector('#colorimage img').src = "storm_purple_bclbp_gbubp_bright_plate_information.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
  
  
  
      }
      
  
      if (exteriorcolor === 'stormpurple' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
        document.querySelector("#img1").src = "storm_purple_gblbp_bcubp_bright.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "storm_purple_gblbp_bcubp_bright_plate.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
       
        document.querySelector('#colorimage img').src = "storm_purple_gblbp_bcubp_bright_plate_information.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
      }
  
      if (exteriorcolor === 'stormpurple' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
        document.querySelector("#img1").src = "storm_purple_gblbp_gbubp_bright.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "storm_purple_gblbp_gbubp_bright_plate.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
      
  
        document.querySelector('#colorimage img').src = "storm_purple_gblbp_gbubp_bright_plate_information.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
  
      }
  
      if (exteriorcolor === 'stormpurple' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
        document.querySelector("#img1").src = "storm_purple_cflbp_bcubp_bright.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "storm_purple_cflbp_bcubp_bright_plate.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
        
  
        document.querySelector('#colorimage img').src = "storm_purple_cflbp_bcubp_bright_plate_information.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
      }
  
      if (exteriorcolor === 'stormpurple' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
        document.querySelector("#img1").src = "storm_purple_cflbp_gbubp_bright.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "storm_purple_cflbp_gbubp_bright_plate.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
       
  
        document.querySelector('#colorimage img').src = "storm_purple_cflbp_gbubp_bright_plate_information.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
  
      }
  
      if (exteriorcolor === 'stormpurple' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
        document.querySelector("#img1").src = "storm_purple_cflbp_cfubp_bright.jpg";
  
        document.querySelector("#currentgrillefinishbodyinfoimage").src = "storm_purple_cflbp_cfubp_bright_plate.jpg";
        document.querySelector("#grillefinishpackagename").innerHTML = "Bright";
  
        
  
        document.querySelector('#colorimage img').src = "storm_purple_cflbp_cfubp_bright_plate_information.jpg";
        document.querySelector("#colorcardcolorname").innerHTML = "Bright";
        document.querySelector('#colorcardcolorinformation').innerHTML = "Brightly finished grille, for a more classical Aston Martin look.";
  
      }
  

  }

  const Dark = () => {
        setgrille('dark');


    if (exteriorcolor === 'qbuckinghamshiregreen' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_buckinghamshire_green_bclbp_bcubp_dark.jpg"
    }
// q quantum silver
if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
  document.querySelector("#img1").src = "q_quantum_silver_bclbp_bcubp_dark.jpg";
  // document.querySelector("#grillefinishcolorborderone").src="q_satin_xenon_grey_bclbp_bcubp_bright_plate.jpg";
  // document.querySelector("#grillefinishcolorbordertwo").src="q_satin_xenon_grey_bclbp_bcubp_dark_plate.jpg";
  document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_quantum_silver_bclbp_bcubp_dark_plate.jpg";
  document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

  // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
  // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";


  document.querySelector('#colorimage img').src = "q_quantum_silver_bclbp_bcubp_dark_plate_information.jpg";
  document.querySelector("#colorcardcolorname").innerHTML = "Dark";
  document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";


}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
  document.querySelector("#img1").src = "q_quantum_silver_bclbp_gbubp_dark.jpg";

  document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_quantum_silver_bclbp_gbubp_dark_plate.jpg";
  document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

  // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
  // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

  document.querySelector('#colorimage img').src = "q_quantum_silver_bclbp_gbubp_dark_plate_information.jpg";
  document.querySelector("#colorcardcolorname").innerHTML = "Dark";
  document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";



}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
  document.querySelector("#img1").src = "q_quantum_silver_gblbp_bcubp_dark.jpg";

  document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_quantum_silver_gblbp_bcubp_dark_plate.jpg";
  document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

  // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
  // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

  document.querySelector('#colorimage img').src = "q_quantum_silver_gblbp_bcubp_dark_plate_information.jpg";
  document.querySelector("#colorcardcolorname").innerHTML = "Dark";
  document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
  document.querySelector("#img1").src = "q_quantum_silver_gblbp_gbubp_dark.jpg";

  document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_quantum_silver_gblbp_gbubp_dark_plate.jpg";
  document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

  // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
  // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

  document.querySelector('#colorimage img').src = "q_quantum_silver_gblbp_gbubp_dark_plate_information.jpg";
  document.querySelector("#colorcardcolorname").innerHTML = "Dark";
  document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
  document.querySelector("#img1").src = "q_quantum_silver_cflbp_bcubp_dark.jpg";

  document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_quantum_silver_cflbp_bcubp_dark_plate.jpg";
  document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

  // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
  // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

  document.querySelector('#colorimage img').src = "q_quantum_silver_cflbp_bcubp_dark_plate_information.jpg";
  document.querySelector("#colorcardcolorname").innerHTML = "Dark";
  document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
  document.querySelector("#img1").src = "q_quantum_silver_cflbp_gbubp_bright.jpg";

  document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_quantum_silver_cflbp_gbubp_dark_plate.jpg";
  document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

  // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
  // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

  document.querySelector('#colorimage img').src = "q_quantum_silver_cflbp_gbubp_dark_plate_information.jpg";
  document.querySelector("#colorcardcolorname").innerHTML = "Dark";
  document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

}

if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
  document.querySelector("#img1").src = "q_quantum_silver_cflbp_cfubp_dark.jpg";

  document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_quantum_silver_cflbp_cfubp_dark_plate.jpg";
  document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

  // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
  // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

  document.querySelector('#colorimage img').src = "q_quantum_silver_cflbp_cfubp_dark_plate_information.jpg";
  document.querySelector("#colorcardcolorname").innerHTML = "Dark";
  document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

}



    //q satin xenon grey
    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_satin_xenon_grey_bclbp_bcubp_dark.jpg";
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
      document.querySelector("#img1").src = "q_satin_xenon_grey_bclbp_gbubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_xenon_grey_bclbp_gbubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "q_satin_xenon_grey_bclbp_gbubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";



    }

    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_satin_xenon_grey_gblbp_bcubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_xenon_grey_gblbp_bcubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "q_satin_xenon_grey_gblbp_bcubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_satin_xenon_grey_gblbp_gbubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_xenon_grey_gblbp_gbubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "q_satin_xenon_grey_gblbp_gbubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_satin_xenon_grey_cflbp_bcubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_xenon_grey_cflbp_bcubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "q_satin_xenon_grey_cflbp_bcubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_satin_xenon_grey_cflbp_gbubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_xenon_grey_cflbp_gbubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "q_satin_xenon_grey_cflbp_gbubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "q_satin_xenon_grey_cflbp_cfubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_xenon_grey_cflbp_cfubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "q_satin_xenon_grey_cflbp_cfubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }


    // q casino royale 

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_casino_royale_bclbp_bcubp_dark.jpg";
      // document.querySelector("#grillefinishcolorborderone").src="q_satin_xenon_grey_bclbp_bcubp_bright_plate.jpg";
      // document.querySelector("#grillefinishcolorbordertwo").src="q_satin_xenon_grey_bclbp_bcubp_dark_plate.jpg";
      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_casino_royale_bclbp_bcubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";


      document.querySelector('#colorimage img').src = "q_casino_royale_bclbp_bcubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";


    }

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_casino_royale_bclbp_gbubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_casino_royale_bclbp_gbubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "q_casino_royale_bclbp_gbubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";



    }

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_casino_royale_gblbp_bcubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_casino_royale_gblbp_bcubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "q_casino_royale_gblbp_bcubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_casino_royale_gblbp_gbubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_casino_royale_gblbp_gbubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "q_casino_royale_gblbp_gbubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_casino_royale_cflbp_bcubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_casino_royale_cflbp_bcubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderoen").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "q_casino_royale_cflbp_bcubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_casino_royale_cflbp_gbubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_casino_royale_cflbp_gbubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "q_casino_royale_cflbp_gbubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "q_casino_royale_cflbp_cfubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_casino_royale_cflbp_cfubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "q_casino_royale_cflbp_cfubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    // q satin titanium grey


    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_satin_titanium_grey_bclbp_bcubp_dark.jpg";
      // document.querySelector("#grillefinishcolorborderone").src="q_satin_xenon_grey_bclbp_bcubp_bright_plate.jpg";
      // document.querySelector("#grillefinishcolorbordertwo").src="q_satin_xenon_grey_bclbp_bcubp_dark_plate.jpg";
      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_titanium_grey_bclbp_bcubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";


      document.querySelector('#colorimage img').src = "q_satin_titanium_grey_bclbp_bcubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";


    }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_satin_titanium_grey_bclbp_gbubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_titanium_grey_bclbp_gbubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "q_satin_titanium_grey_bclbp_gbubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";



    }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_satin_titanium_grey_gblbp_bcubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_titanium_grey_gblbp_bcubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";
      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";

      document.querySelector('#colorimage img').src = "q_satin_titanium_grey_gblbp_bcubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_satin_titanium_grey_gblbp_gbubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_titanium_grey_gblbp_gbubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "q_satin_titanium_grey_gblbp_gbubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_satin_titanium_grey_cflbp_bcubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_titanium_grey_cflbp_bcubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "q_satin_titanium_grey_cflbp_bcubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_satin_titanium_grey_cflbp_gbubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_titanium_grey_cflbp_gbubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "q_satin_titanium_grey_cflbp_gbubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "q_satin_titanium_grey_cflbp_cfubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_titanium_grey_cflbp_cfubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "q_satin_titanium_grey_cflbp_cfubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    } if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_satin_titanium_grey_bclbp_bcubp_dark.jpg";
      // document.querySelector("#grillefinishcolorborderone").src="q_satin_xenon_grey_bclbp_bcubp_bright_plate.jpg";
      // document.querySelector("#grillefinishcolorbordertwo").src="q_satin_xenon_grey_bclbp_bcubp_dark_plate.jpg";
      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_titanium_grey_bclbp_bcubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";


      document.querySelector('#colorimage img').src = "q_satin_titanium_grey_bclbp_bcubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";


    }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_satin_titanium_grey_bclbp_gbubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_titanium_grey_bclbp_gbubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";
      
      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "q_satin_titanium_grey_bclbp_gbubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";



    }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_satin_titanium_grey_gblbp_bcubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_titanium_grey_gblbp_bcubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "q_satin_titanium_grey_gblbp_bcubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_satin_titanium_grey_gblbp_gbubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_titanium_grey_gblbp_gbubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "q_satin_titanium_grey_gblbp_gbubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_satin_titanium_grey_cflbp_bcubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_titanium_grey_cflbp_bcubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "q_satin_titanium_grey_cflbp_bcubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_satin_titanium_grey_cflbp_gbubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_titanium_grey_cflbp_gbubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "q_satin_titanium_grey_cflbp_gbubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "q_satin_titanium_grey_cflbp_cfubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_satin_titanium_grey_cflbp_cfubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "q_satin_titanium_grey_cflbp_cfubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }
    

    // q seychelles blue
    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_seychelles_blue_bclbp_bcubp_dark.jpg";
      // document.querySelector("#grillefinishcolorborderone").src="q_satin_xenon_grey_bclbp_bcubp_bright_plate.jpg";
      // document.querySelector("#grillefinishcolorbordertwo").src="q_satin_xenon_grey_bclbp_bcubp_dark_plate.jpg";
      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_bclbp_bcubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";


      document.querySelector('#colorimage img').src = "q_seychelles_blue_bclbp_bcubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";


    }

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_seychelles_blue_bclbp_gbubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_bclbp_gbubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "q_seychelles_blue_bclbp_gbubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";



    }

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_seychelles_blue_gblbp_bcubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_gblbp_bcubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";
      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";

      document.querySelector('#colorimage img').src = "q_seychelles_blue_gblbp_bcubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_seychelles_blue_gblbp_gbubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_gblbp_gbubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "q_seychelles_blue_gblbp_gbubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_seychelles_blue_cflbp_bcubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_cflbp_bcubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "q_seychelles_blue_cflbp_bcubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_seychelles_blue_cflbp_gbubp_bright.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_cflbp_gbubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "q_seychelles_blue_cflbp_gbubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "q_seychelles_blue_cflbp_cfubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_cflbp_cfubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

      document.querySelector('#colorimage img').src = "q_seychelles_blue_cflbp_cfubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

     }
       
    // if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
    //   document.querySelector("#img1").src = "q_seychelles_blue_bclbp_bcubp_dark.jpg";
    //   // document.querySelector("#grillefinishcolorborderone").src="q_satin_xenon_grey_bclbp_bcubp_bright_plate.jpg";
    //   // document.querySelector("#grillefinishcolorbordertwo").src="q_satin_xenon_grey_bclbp_bcubp_dark_plate.jpg";
    //   document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_bclbp_bcubp_dark_plate.jpg";
    //   document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

    //   // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
    //   // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";


    //   document.querySelector('#colorimage img').src = "q_seychelles_blue_bclbp_bcubp_dark_plate_information.jpg";
    //   document.querySelector("#colorcardcolorname").innerHTML = "Dark";
    //   document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";


    // }

    // if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
    //   document.querySelector("#img1").src = "q_seychelles_blue_bclbp_gbubp_dark.jpg";

    //   document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_bclbp_gbubp_dark_plate.jpg";
    //   document.querySelector("#grillefinishpackagename").innerHTML = "Dark";
      
    //   // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
    //   // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

    //   document.querySelector('#colorimage img').src = "q_seychelles_blue_bclbp_gbubp_dark_plate_information.jpg";
    //   document.querySelector("#colorcardcolorname").innerHTML = "Dark";
    //   document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";



    // }

    // if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
    //   document.querySelector("#img1").src = "q_seychelles_blue_gblbp_bcubp_dark.jpg";

    //   document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_gblbp_bcubp_dark_plate.jpg";
    //   document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

    //   // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
    //   // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

    //   document.querySelector('#colorimage img').src = "q_seychelles_blue_gblbp_bcubp_dark_plate_information.jpg";
    //   document.querySelector("#colorcardcolorname").innerHTML = "Dark";
    //   document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    // }

    // if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
    //   document.querySelector("#img1").src = "q_seychelles_blue_gblbp_gbubp_dark.jpg";

    //   document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_gblbp_gbubp_dark_plate.jpg";
    //   document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

    //   // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
    //   // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

    //   document.querySelector('#colorimage img').src = "q_seychelles_blue_gblbp_gbubp_dark_plate_information.jpg";
    //   document.querySelector("#colorcardcolorname").innerHTML = "Dark";
    //   document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    // }

    // if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
    //   document.querySelector("#img1").src = "q_seychelles_blue_cflbp_bcubp_dark.jpg";

    //   document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_cflbp_bcubp_dark_plate.jpg";
    //   document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

    //   // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
    //   // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

    //   document.querySelector('#colorimage img').src = "q_seychelles_blue_cflbp_bcubp_dark_plate_information.jpg";
    //   document.querySelector("#colorcardcolorname").innerHTML = "Dark";
    //   document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    // }

    // if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
    //   document.querySelector("#img1").src = "q_seychelles_blue_cflbp_gbubp_dark.jpg";

    //   document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_cflbp_gbubp_dark_plate.jpg";
    //   document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

    //   // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
    //   // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

    //   document.querySelector('#colorimage img').src = "q_seychelles_blue_cflbp_gbubp_dark_plate_information.jpg";
    //   document.querySelector("#colorcardcolorname").innerHTML = "Dark";
    //   document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    // }

    // if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
    //   document.querySelector("#img1").src = "q_seychelles_blue_cflbp_cfubp_dark.jpg";

    //   document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_cflbp_cfubp_dark_plate.jpg";
    //   document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

    //   // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
    //   // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

    //   document.querySelector('#colorimage img').src = "q_seychelles_blue_cflbp_cfubp_dark_plate_information.jpg";
    //   document.querySelector("#colorcardcolorname").innerHTML = "Dark";
    //   document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    // }

    // if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
    //   document.querySelector("#img1").src = "q_seychelles_blue_bclbp_bcubp_dark.jpg";
    //   // document.querySelector("#grillefinishcolorborderone").src="q_satin_xenon_grey_bclbp_bcubp_bright_plate.jpg";
    //   // document.querySelector("#grillefinishcolorbordertwo").src="q_satin_xenon_grey_bclbp_bcubp_dark_plate.jpg";
    //   document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_bclbp_bcubp_dark_plate.jpg";
    //   document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

    //   // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
    //   // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";


    //   document.querySelector('#colorimage img').src = "q_seychelles_blue_bclbp_bcubp_dark_plate_information.jpg";
    //   document.querySelector("#colorcardcolorname").innerHTML = "Dark";
    //   document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";


    // }

    // if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
    //   document.querySelector("#img1").src = "q_seychelles_blue_bclbp_gbubp_dark.jpg";

    //   document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_bclbp_gbubp_dark_plate.jpg";
    //   document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

    //   // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
    //   // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

    //   document.querySelector('#colorimage img').src = "q_seychelles_blue_bclbp_gbubp_dark_plate_information.jpg";
    //   document.querySelector("#colorcardcolorname").innerHTML = "Dark";
    //   document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";



    // }

    // if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
    //   document.querySelector("#img1").src = "q_seychelles_blue_gblbp_bcubp_dark.jpg";

    //   document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_gblbp_bcubp_dark_plate.jpg";
    //   document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

    //   // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";
    //   // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";

    //   document.querySelector('#colorimage img').src = "q_seychelles_blue_gblbp_bcubp_dark_plate_information.jpg";
    //   document.querySelector("#colorcardcolorname").innerHTML = "Dark";
    //   document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    // }

    // if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
    //   document.querySelector("#img1").src = "q_seychelles_blue_gblbp_gbubp_dark.jpg";

    //   document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_gblbp_gbubp_dark_plate.jpg";
    //   document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

    //   // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
    //   // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

    //   document.querySelector('#colorimage img').src = "q_seychelles_blue_gblbp_gbubp_dark_plate_information.jpg";
    //   document.querySelector("#colorcardcolorname").innerHTML = "Dark";
    //   document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    // }

    // if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
    //   document.querySelector("#img1").src = "q_seychelles_blue_cflbp_bcubp_dark.jpg";

    //   document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_cflbp_bcubp_dark_plate.jpg";
    //   document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

    //   // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
    //   // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

    //   document.querySelector('#colorimage img').src = "q_seychelles_blue_cflbp_bcubp_dark_plate_information.jpg";
    //   document.querySelector("#colorcardcolorname").innerHTML = "Dark";
    //   document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    // }

    // if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
    //   document.querySelector("#img1").src = "q_seychelles_blue_cflbp_gbubp_bright.jpg";

    //   document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_cflbp_gbubp_dark_plate.jpg";
    //   document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

    //   // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
    //   // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

    //   document.querySelector('#colorimage img').src = "q_seychelles_blue_cflbp_gbubp_dark_plate_information.jpg";
    //   document.querySelector("#colorcardcolorname").innerHTML = "Dark";
    //   document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    // }

    // if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
    //   document.querySelector("#img1").src = "q_seychelles_blue_cflbp_cfubp_dark.jpg";

    //   document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_seychelles_blue_cflbp_cfubp_dark_plate.jpg";
    //   document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

    //   // document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
    //   // document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";

    //   document.querySelector('#colorimage img').src = "q_seychelles_blue_cflbp_cfubp_dark_plate_information.jpg";
    //   document.querySelector("#colorcardcolorname").innerHTML = "Dark";
    //   document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

      
    // } 
    //q ion blue
    
    if (exteriorcolor === 'qionblue' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_ion_blue_bclbp_bcubp_dark.jpg";
      
      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_ion_blue_bclbp_bcubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      

      document.querySelector('#colorimage img').src = "q_ion_blue_bclbp_bcubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";


    }

    if (exteriorcolor === 'qionblue' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_ion_blue_bclbp_gbubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_ion_blue_bclbp_gbubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";
      
     
      document.querySelector('#colorimage img').src = "q_ion_blue_bclbp_gbubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";



    }

    if (exteriorcolor === 'qionblue' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_ion_blue_gblbp_bcubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_ion_blue_gblbp_bcubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";


      document.querySelector('#colorimage img').src = "q_ion_blue_gblbp_bcubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'qionblue' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_ion_blue_gblbp_gbubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_ion_blue_gblbp_gbubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      

      document.querySelector('#colorimage img').src = "q_ion_blue_gblbp_gbubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'qionblue' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_ion_blue_cflbp_bcubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_ion_blue_cflbp_bcubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";


      document.querySelector('#colorimage img').src = "q_ion_blue_cflbp_bcubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'qionblue' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_ion_blue_cflbp_gbubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_ion_blue_cflbp_gbubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

     

      document.querySelector('#colorimage img').src = "q_ion_blue_cflbp_gbubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'qionblue' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "q_ion_blue_cflbp_cfubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_ion_blue_cflbp_cfubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      

      document.querySelector('#colorimage img').src = "q_ion_blue_cflbp_cfubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    ///  plasma blue
    if (exteriorcolor === 'plasmablue' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "plasma_blue_bclbp_bcubp_dark.jpg";
      
      document.querySelector("#currentgrillefinishbodyinfoimage").src = "plasma_blue_bclbp_bcubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      

      document.querySelector('#colorimage img').src = "plasma_blue_bclbp_bcubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";


    }

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "plasma_blue_bclbp_gbubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "plasma_blue_bclbp_gbubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";
      
     
      document.querySelector('#colorimage img').src = "plasma_blue_bclbp_gbubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";



    }

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "plasma_blue_gblbp_bcubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "plasma_blue_gblbp_bcubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";


      document.querySelector('#colorimage img').src = "plasma_blue_gblbp_bcubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "plasma_blue_gblbp_gbubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "plasma_blue_gblbp_gbubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      

      document.querySelector('#colorimage img').src = "plasma_blue_gblbp_gbubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "plasma_blue_cflbp_bcubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "plasma_blue_cflbp_bcubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";


      document.querySelector('#colorimage img').src = "plasma_blue_cflbp_bcubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "plasma_blue_cflbp_gbubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "plasma_blue_cflbp_gbubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

     

      document.querySelector('#colorimage img').src = "plasma_blue_cflbp_gbubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "plasma_blue_cflbp_cfubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "plasma_blue_cflbp_cfubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      

      document.querySelector('#colorimage img').src = "plasma_blue_cflbp_cfubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    // elwood blue

    if (exteriorcolor === 'elwoodblue' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "elwood_blue_bclbp_bcubp_dark.jpg";
      
      document.querySelector("#currentgrillefinishbodyinfoimage").src = "elwood_blue_bclbp_bcubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      

      document.querySelector('#colorimage img').src = "elwood_blue_bclbp_bcubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";


    }

    if (exteriorcolor === 'elwoodblue' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "elwood_blue_bclbp_gbubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "elwood_blue_bclbp_gbubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";
      
     
      document.querySelector('#colorimage img').src = "elwood_blue_bclbp_gbubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";



    }

    if (exteriorcolor === 'elwoodblue' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "elwood_blue_gblbp_bcubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "elwood_blue_gblbp_bcubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";


      document.querySelector('#colorimage img').src = "elwood_blue_gblbp_bcubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'elwoodblue' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "elwood_blue_gblbp_gbubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "elwood_blue_gblbp_gbubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      

      document.querySelector('#colorimage img').src = "elwood_blue_gblbp_gbubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'elwoodblue' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "elwood_blue_cflbp_bcubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "elwood_blue_cflbp_bcubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";


      document.querySelector('#colorimage img').src = "elwood_blue_cflbp_bcubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'elwoodblue' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "elwood_blue_cflbp_gbubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "elwood_blue_cflbp_gbubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

     

      document.querySelector('#colorimage img').src = "elwood_blue_cflbp_gbubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'elwoodblue' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "elwood_blue_cflbp_cfubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "elwood_blue_cflbp_cfubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      

      document.querySelector('#colorimage img').src = "elwood_blue_cflbp_cfubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    // q digital violet

    if (exteriorcolor === 'stormpurple' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "storm_purple_bclbp_bcubp_dark.jpg";
      
      document.querySelector("#currentgrillefinishbodyinfoimage").src = "storm_purple_bclbp_bcubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      

      document.querySelector('#colorimage img').src = "storm_purple_bclbp_bcubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";


    }

    if (exteriorcolor === 'stormpurple' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "storm_purple_bclbp_gbubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "storm_purple_bclbp_gbubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";
      
     
      document.querySelector('#colorimage img').src = "storm_purple_bclbp_gbubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";



    }

    if (exteriorcolor === 'stormpurple' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "storm_purple_gblbp_bcubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "storm_purple_gblbp_bcubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";


      document.querySelector('#colorimage img').src = "storm_purple_gblbp_bcubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'stormpurple' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "storm_purple_gblbp_gbubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "storm_purple_gblbp_gbubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      

      document.querySelector('#colorimage img').src = "storm_purple_gblbp_gbubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'stormpurple' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "storm_purple_cflbp_bcubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "storm_purple_cflbp_bcubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";


      document.querySelector('#colorimage img').src = "storm_purple_cflbp_bcubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'stormpurple' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "storm_purple_cflbp_gbubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "storm_purple_cflbp_gbubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

     

      document.querySelector('#colorimage img').src = "storm_purple_cflbp_gbubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'stormpurple' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "storm_purple_cflbp_cfubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "storm_purple_cflbp_cfubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      

      document.querySelector('#colorimage img').src = "storm_purple_cflbp_cfubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

     // storm purple

     if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'bodycolor' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_digital_violet_bclbp_bcubp_dark.jpg";
      
      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_digital_violet_bclbp_bcubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      

      document.querySelector('#colorimage img').src = "q_digital_violet_bclbp_bcubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";


    }

    if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'bodycolor' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_digital_violet_bclbp_gbubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_digital_violet_bclbp_gbubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";
      
     
      document.querySelector('#colorimage img').src = "q_digital_violet_bclbp_gbubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";



    }

    if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'glossblack' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_digital_violet_gblbp_bcubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_digital_violet_gblbp_bcubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";


      document.querySelector('#colorimage img').src = "q_digital_violet_gblbp_bcubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'glossblack' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_digital_violet_gblbp_gbubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_digital_violet_gblbp_gbubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      

      document.querySelector('#colorimage img').src = "q_digital_violet_gblbp_gbubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'carbonfibre' && upperpackage === 'bodycolor') {
      document.querySelector("#img1").src = "q_digital_violet_cflbp_bcubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_digital_violet_cflbp_bcubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";


      document.querySelector('#colorimage img').src = "q_digital_violet_cflbp_bcubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";
    }

    if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'carbonfibre' && upperpackage === 'glossblack') {
      document.querySelector("#img1").src = "q_digital_violet_cflbp_gbubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_digital_violet_cflbp_gbubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

     

      document.querySelector('#colorimage img').src = "q_digital_violet_cflbp_gbubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'carbonfibre' && upperpackage === 'carbonfibre') {
      document.querySelector("#img1").src = "q_digital_violet_cflbp_cfubp_dark.jpg";

      document.querySelector("#currentgrillefinishbodyinfoimage").src = "q_digital_violet_cflbp_cfubp_dark_plate.jpg";
      document.querySelector("#grillefinishpackagename").innerHTML = "Dark";

      

      document.querySelector('#colorimage img').src = "q_digital_violet_cflbp_cfubp_dark_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Dark";
      document.querySelector('#colorcardcolorinformation').innerHTML = "Look to a darker finish on your front grille, for a stealthier, more sporting appearance.";

    }

    
    
  }

  return (<>
    <div id="grillefinishpackagediv">
      <div id="grillefinishpackage">
        <div id="grillefinishpackageplatesdiv">

          <div id="grillefinishpackageimagesplate">
            <div className="grillefinishpackagehoverhider" id="grillefinishcolorborderone"><img src="q_buckinghamshire_green_bclbp_bcubp_bright_plate.jpg" className="grillefinishbodyscaling" alt="" id="grillefinishbodycolorone" onClick={Bright} /></div>
            <div className="grillefinishpackagehoverhider" id="grillefinishcolorbordertwo"><img src="q_buckinghamshire_green_bclbp_bcubp_dark_plate.jpg" alt="" className="grillefinishbodyscaling" id="grillefinishbodycolortwo" onClick={Dark} /></div>

          </div>
        </div>
        <div id="grillefinishpackageimageinformationsection">
          <div id="grillefinishpackageimagewithinfo">
            <img src="q_buckinghamshire_green_bclbp_bcubp_bright_plate.jpg" alt="" id="currentgrillefinishbodyinfoimage" />
            <img src="infobutton.png" alt="" id="infobuttonforgrillefinishbody" onClick={showinfofunction} />
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