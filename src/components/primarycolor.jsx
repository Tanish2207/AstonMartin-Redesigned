
import './primarycolor.css';

const PrimaryColor=(props)=>{
  
 const MetallicBlack=(props)=>{


      document.querySelector("#img1").src="metallic_black_primary_color_frontview.jpg";
      document.querySelector("#img2").src="metallic_black_primary_color_sideview.jpg";
      document.querySelector("#img3").src="metallic_black_primary_color_steeringview.jpg";
      document.querySelector("#img4").src="metallic_black_primary_color_steeringleftbackview.jpg";
document.querySelector("#primaryplateone").style.borderBottom="2px solid white";
// document.querySelector("#primaryplatetwo,#primaryplatethree,#primaryplatefour").style.borderBottom="";
document.querySelector("#primaryplatetwo").style.border="none";
document.querySelector("#primaryplatethree").style.border="none";
document.querySelector("#primaryplatefour").style.border="none";



document.querySelector("#primarycolorimageplate img").src="metallic_black_primary_color_plate.jpg";
document.querySelector("#primarycolortype").innerHTML="Colour Pallete";
document.querySelector("#primarycolorname").innerHTML="Metallic Black";

 }
  const OnyxBlack=()=>{
    document.querySelector("#img1").src="onyx_black_primary_color_frontview.jpg";
    document.querySelector("#img2").src="onyx_black_primary_color_sideview.jpg";
    document.querySelector("#img3").src="onyx_black_primary_color_steeringview.jpg";
    document.querySelector("#img4").src="onyx_black_primary_color_steeringleftbackview.jpg";
    
    document.querySelector("#primaryplatetwo").style.borderBottom="2px solid white";
    // document.querySelector("#primaryplateone,#primaryplatethree,#primaryplatefour").style.borderBottom="";
    document.querySelector("#primaryplateone").style.border="none";
document.querySelector("#primaryplatethree").style.border="none";
document.querySelector("#primaryplatefour").style.border="none";


document.querySelector("#primarycolorimageplate img").src="onyx_black_primary_color_plate.jpg";
document.querySelector("#primarycolortype").innerHTML=" ";
document.querySelector("#primarycolorname").innerHTML="Onyx Black";

    
  }
 const ArdenGreenMetallic=()=>{
  document.querySelector("#img1").src="arden_green_metallic_primary_color_frontview.jpg";
  document.querySelector("#img2").src="arden_green_metallic_primary_color_sideview.jpg";
  document.querySelector("#img3").src="arden_green_metallic_primary_color_steeringview.jpg";
  document.querySelector("#img4").src="arden_green_metallic_primary_color_steeringleftbackview.jpg";
  
  document.querySelector("#primaryplatethree").style.borderBottom="2px solid white";
  // document.querySelector("#primaryplateone,#primaryplatetwo,#primaryplatefour").style.borderBottom="none";
  document.querySelector("#primaryplatetwo").style.border="none";
document.querySelector("#primaryplateone").style.border="none";
document.querySelector("#primaryplatefour").style.border="none";

document.querySelector("#primarycolorimageplate img").src="arden_green_metallic_primary_color_plate.jpg";
document.querySelector("#primarycolortype").innerHTML="Colour Pallete";
document.querySelector("#primarycolorname").innerHTML="Arden Green Metallic";

  
 }
 const BisonBrown=()=>{
  document.querySelector("#img1").src="bison_brown_primary_color_frontview.jpg";
  document.querySelector("#img2").src="bison_brown_primary_color_sideview.jpg";
  document.querySelector("#img3").src="bison_brown_primary_color_steeringview.jpg";
  document.querySelector("#img4").src="bison_brown_primary_color_steeringleftbackview.jpg";
  
  document.querySelector("#primaryplatefour").style.borderBottom="2px solid white";
  // document.querySelector("#primaryplatetwo,#primaryplatethree,#primaryplateone").style.borderBottom="none";
  document.querySelector("#primaryplatetwo").style.border="none";
document.querySelector("#primaryplatethree").style.border="none";
document.querySelector("#primaryplateone").style.border="none";

document.querySelector("#primarycolorimageplate img").src="bison_brown_primary_color_plate.jpg";
document.querySelector("#primarycolortype").innerHTML="Colour Pallete";
document.querySelector("#primarycolorname").innerHTML="Bison Brown";

  
 }
  return(<>
<div id="primarycolorwindow">
  <div id="primarycolorsection">
    <div id="primarycolorplates">
      <div className="imagescaler" id="primaryplateone"><img src="metallic_black_primary_color_plate.jpg" alt="" onClick={MetallicBlack}/></div>
      <div className="imagescaler" id="primaryplatetwo"><img src="onyx_black_primary_color_plate.jpg" alt="" onClick={OnyxBlack}/></div>
      <div className="imagescaler" id="primaryplatethree"><img src="arden_green_metallic_primary_color_plate.jpg" alt="" onClick={ArdenGreenMetallic} /></div>
      <div className="imagescaler" id="primaryplatefour"><img src="bison_brown_primary_color_plate.jpg" alt="" onClick={BisonBrown}/></div>

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