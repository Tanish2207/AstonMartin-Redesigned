import './taillights.css'
import Glazing from '../glazing/glazing';

const TailLights=({showinfofunction})=>{
  return (



    <>
    <div id="taillightpackagediv">
        <div id="taillightpackage">
          <div id="taillightpackageplatesdiv">
  
            <div id="taillightpackageimagesplate">
              <div className="taillightpackagehoverhider" id="taillightcolorborderone"
              //  onClick={BodyColouredRoof}
               ><img src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720871204/q_bukinghamshire_green_smoked_tail_lights_plate_e1nn8h.jpg" className="taillightbodyscaling" alt="" id="taillightbodycolorone"  /></div>
  
              
  
            </div>
          </div>
          <div id="taillightpackageimageinformationsection">
            <div id="taillightpackageimagewithinfo">
              <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720871204/q_bukinghamshire_green_smoked_tail_lights_plate_e1nn8h.jpg" alt="" id="currenttaillightbodyinfoimage" />
             
            </div>
            <div id="taillightpackageinformationcontent">
              <div id="taillightpackagename">Smoked Tail Lights</div>
            </div>
          </div>
        </div>
      </div>

    
    <Glazing />
    </>
    )
}

export default TailLights;