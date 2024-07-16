import './exteriorpackages.css';


const ExteriorPackages=({colorplatediv,pack,setpack})=>{
  const lowerbodypackaged=document.querySelector("#lowerbodypackage");
  const lower=document.querySelector("#lowerpackagediv");
  const upper=document.querySelector("#upperpackagediv");
  const upperbodypackaged= document.querySelector("#upperbodypackage");
  
  if(pack==='lower'&& lowerbodypackaged && upperbodypackaged && lower && upper)
    {
    lowerbodypackaged.style.borderBottom="2px solid white";
    lowerbodypackaged.style.color="white";
     upperbodypackaged.style.borderBottom="none";
     upperbodypackaged.style.color="#acaead";

     lower.style.display="block";
     upper.style.display="none";
    }
  
    if(pack==='upper' && lowerbodypackaged && upperbodypackaged && lower && upper)
      {
        // document.querySelector("#upperbodypackage").style.borderBottom="2px solid white";
        // document.querySelector("#lowerbodypackage").style.borderBottom="none";
        // const lowerbodypackaged=document.querySelector("#lowerbodypackage")
      // const upperbodypackaged= document.querySelector("#upperbodypackage")
      upperbodypackaged.style.borderBottom="2px solid white";
      upperbodypackaged.style.color="white";
     lowerbodypackaged.style.borderBottom="none";
     lowerbodypackaged.style.color="#acaead";

     lower.style.display="none";
     upper.style.display="block";
      }

const LowerBodyPackage=()=>{
  setpack('lower');
  document.querySelector("#lowerbodypackage").style.color="white";
  document.querySelector("#upperbodypackage").style.color="#acaead";
// document.querySelector("#lowerbodypackage").style.borderBottom="3px solid white";
// document.querySelector("#upperbodypackage").style.borderBottom="none";

document.querySelector("#lowerpackagediv").style.display="block";
// console.log(props.colorplatediv);
document.querySelector(".colorplatediv").style.display="none";


document.querySelector("#upperpackagediv").style.display="none";

document.querySelector("#purpleblueplatessection").style.display="none";
document.querySelector("#grillefinishpackagediv").style.display="none";
// if(pack==='lower')
//   {
//     document.querySelector("#lowerbodypackage").style.borderBottom="2px solid white";
//     document.querySelector("#upperbodypackage").style.borderBottom="none";
//   }

//   if(pack==='upper')
//     {
//       document.querySelector("#upperbodypackage").style.borderBottom="2px solid white";
//       document.querySelector("#lowerbodypackage").style.borderBottom="none";
//     }



}

const UpperBodyPackage=()=>{
  setpack('upper');
  document.querySelector("#lowerbodypackage").style.color="#acaead";
  document.querySelector("#upperbodypackage").style.color="white";
  // document.querySelector("#lowerbodypackage").style.borderBottom="none";
  // document.querySelector("#upperbodypackage").style.borderBottom="3px solid white";

  document.querySelector("#lowerpackagediv").style.display="none"
  document.querySelector("#upperpackagediv").style.display="block";
document.querySelector("#grillefinishpackagediv").style.display="none";


 
  }


return(<>
<div id="exteriorpackagewindow">

<div id="exteriorpackagesection">

<div className="exteriorpackagep" id="lowerbodypackage" onClick={LowerBodyPackage}>Lower Body Package</div>
<div className="exteriorpackagep" id="upperbodypackage" onClick={UpperBodyPackage}>Upper Body Package</div>
{/* <div className="exteriorpackagep">Grille Finish</div>
<div className="exteriorpackagep">Roof</div>
<div className="exteriorpackagep">Wheels</div>
<div className="exteriorpackagep">Brakes</div>
<div className="exteriorpackagep">Tail Lights</div>
<div className="exteriorpackagep">Glazing</div> */}

</div>
</div>

</>)


}

export default ExteriorPackages;