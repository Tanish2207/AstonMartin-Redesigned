import './paint.css';
import StartConfiguration from './startconfiguration';
import Purpleblue from './purpleandblue';


const Paint=(props)=>{

  const paint=({props})=>
  {
    
  // console.log(typeof props.handleshowPaintSection )
    handleshowPaintSection();
  }
  
  const blackandgreys=(props)=>{
    document.querySelector("#blackandgreys").style.borderBottom="white 1px solid";
document.querySelector("#blackandgreys").style.color="white";
document.querySelector("#purplesandblues").style.color="#acaead";


    document.querySelector("#purplesandblues,#greens,#reds,#bronzesandoranges,#silversanswhites").style.borderBottom="";
//     console.log(typeof props.purpleandbluehide);
// console.log(typeof props.blackgrey);

//     // props.purpleandbluehide();
//     // props.blackgrey();
//     console.log("cliked");
  }
  
  // const purpleblues=({showpurpleandblue})=>{
    
  //   document.querySelector("#purplesandblues").style.borderBottom="white 1px solid";
  //   document.querySelector("#blackandgreys,#greens,#reds,#bronzesandoranges,#silversanswhites").style.borderBottom="";
  //   showpurpleandblue();
  //   // console.log("clikeds");
  //   // props.showpurpleandblue();

  // }

  const purpleblues=()=>{
    document.querySelector("#purpleblueplatessection").style.display="block";
    document.querySelector(".colorplatediv").style.display="none";
  

document.querySelector("#purplesandblues").style.color="white";
document.querySelector("#blackandgreys").style.color="#acaead";



    document.querySelector("#interiorwindow").style.display="none";
     document.querySelector("#purplesandblues").style.borderBottom="white 1px solid";
    document.querySelector("#blackandgreys,#greens,#reds,#bronzesandoranges,#silversanswhites").style.borderBottom="";



  }

  
  return(<>
{/* <Purpleblue   showpurpleblue={purpleblues}/> */}
  <div id="paintbar">
  <div id="paintsection">
   <p id="blackandgreys" onClick={()=>{props.blackgrey();blackandgreys();}}>Black & Greys</p>
   <p id="purplesandblues" onClick={()=>{purpleblues();}}>Purples & Blues</p>
   <p id="greens" >Greens</p>
   <p id="reds">Reds</p>
   <p id="bronzesandoranges">Bronzes & Oranges</p>
   <p id="silversandwhites"> Silvers & Whites</p>
  </div>
  </div>
  </>)
}

export default Paint;