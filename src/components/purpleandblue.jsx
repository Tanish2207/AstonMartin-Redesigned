import './purpleandblue.css' ;
import Paint from './paint';
 

const Purpleblue=(props)=>{
  
  const qionblueinfo=()=>{
    
 document.querySelector("#purpleplate img").src="q_ion_blue_plate.jpg";
 document.querySelector("#purplecolortype").innerHTML="Icon";
 document.querySelector("#purplecolorname").innerHTML="Q Ion Blue";
   
  }

  const plasmablueinfo=()=>{
    document.querySelector("#purpleplate img").src="plasma_blue_plate.jpg";
 document.querySelector("#purplecolortype").innerHTML="Signature Metallic";
 document.querySelector("#purplecolorname").innerHTML="Plasma Blue";

  }

  const qseychellesblueinfo=()=>{
    document.querySelector("#purpleplate img").src="q_seychelles_blue_plate.jpg";
    document.querySelector("#purplecolortype").innerHTML="Provenance";
    document.querySelector("#purplecolorname").innerHTML="Q Seychelles Blue";

    document.querySelector("#purpleplateone").borderBottom="5px solid white";
    document.querySelector("#purpleplatetwo,#purpleplatethree,#purpleplatefour,#purpleplatefive,#purpleplatesix")

   
  }

  const elwoodblueinfo=()=>{
    document.querySelector("#purpleplate img").src="elwood_blue_plate.jpg";
    document.querySelector("#purplecolortype").innerHTML="Racing Line";
    document.querySelector("#purplecolorname").innerHTML="Elwood Blue";
  }

  const qdigitalvioletinfo=()=>{
    document.querySelector("#purpleplate img").src="q_digital_violet_plate.jpg";
    document.querySelector("#purplecolortype").innerHTML="Special";
    document.querySelector("#purplecolorname").innerHTML="Q Digital Violet";
  }

  const stormpurpleinfo=()=>{
    document.querySelector("#purpleplate img").src="storm_purple_plate.jpg";
    document.querySelector("#purplecolortype").innerHTML="Signature Metallic";
    document.querySelector("#purplecolorname").innerHTML="Storm Purple";
  }

  const purplebluehide=()=>{
document.querySelector(".purpleblueplates").style.display="none";
  }

  const hideinterior=({interior})=>{
interior();
  }
  const purpleblueshow=({showpurpleblue})=>{
    showpurpleblue();
    // document.querySelector("#purplesandblues").style.borderBottom="1px solid white";

  }



  

  return(<>
 
        


          {/* <Paint purpleandbluehide={purplebluehide}  */}
          {/* // showpurpleandblue={showpurpleblue} */}
          {/* /> */}
          <div id="purpleblueplatessection">

           <div className="purpleblueplates">
           
             <div className="purpleblueimage" id="purpleplateone" 
            //  onMouseEnter={ props.hoverseychellesblue()} 
              // onMouseLeave={props.leaveseychellesblue()}
              >
              <img src="q_seychelles_blue_plate.jpg"  onClick={()=>{props.qseychellesblue();qseychellesblueinfo();}} className="purpleimagescale"/>
              <img id="colorplateinfobuttonseychellesblue" src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879541/infobutton_admoia.png" 
              //  onClick={()=>{props.info()}}
               /> 
              </div> 
             {/* <div className="purpleimagescale"><img src="q_ion_blue_plate.jpg" className="purpleimagescale" id="purpleplatetwo"onClick={props.qiconblue,qiconblueinfo()}/></div> */}
             <div className="purpleblueimage" id="purpleplatetwo" >
  <img src="q_ion_blue_plate.jpg" className="purpleimagescale"  onClick={() => { props.qionblue(); qionblueinfo(); }} />
  <img id="colorplateinfobuttonionblue" src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879541/infobutton_admoia.png" 
  //  onClick={()=>{props.info()}}
   /> 

</div>

             {/* <div className="purpleblueimage"><img src="q_ion_blue_plate.jpg" className="purpleimagescale" id="purpleplatetwo"/></div> */}

              <div className="purpleblueimage" id="purpleplatethree">
                <img src="plasma_blue_plate.jpg" className="purpleimagescale"  onClick={()=>{props.plasmablue(),plasmablueinfo();}}/>
              <img id="colorplateinfobuttonplasmablue" src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879541/infobutton_admoia.png" 
              //  onClick={()=>{props.info()}}
               /> 
                
                </div>

<div className="purpleblueimage" id="purpleplatefour">
  <img src="elwood_blue_plate.jpg" className="purpleimagescale" onClick={()=>{props.elwoodblue();elwoodblueinfo();}} />
  <img id="colorplateinfobuttonelwoodblue" src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879541/infobutton_admoia.png"  
  // onClick={()=>{props.info()}}
  /> 
  
  </div>


<div className="purpleblueimage" id="purpleplatefive">
  <img src="q_digital_violet_plate.jpg" className='purpleimagescale'  onClick={()=>{props.qdigitalviolet();qdigitalvioletinfo()}}/>
  <img id="colorplateinfobuttondigitalviolet" src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879541/infobutton_admoia.png" 
  //  onClick={()=>{props.info()}}
   /> 
  
  </div>


<div className="purpleblueimage"id="purpleplatesix">
  <img src="storm_purple_plate.jpg" className='purpleimagescale' onClick={()=>{props.stormpurple();stormpurpleinfo()}} />
  <img id="colorplateinfobuttonstormpurple" src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879541/infobutton_admoia.png" 
  //  onClick={()=>{props.info()}}
   /> 
  
  </div>




            <div id="purplebluecolorplateinformationsection">
<div id="purpleplate">
  <img src="q_seychelles_blue_plate.jpg" alt="" />
<img src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879541/infobutton_admoia.png" id="purplecolorplateinfobutton" onClick={()=>{props.info()}} 
/>
</div>

<div id="PurpleColorInfomationContent">
            <div id="purplecolortype">Provenance</div>
            <div id="purplecolorname">Q Seychelles Blue</div>
            </div>
            </div>

           </div>
          </div>
  </>)
 }

 export default Purpleblue;