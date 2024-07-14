import './wheels.css'
import Brakes from '../brakes/brakes';


const Wheels=({showinfofunction})=>{
  return (



    <>
    <div id="wheelpackagediv">
        <div id="wheelpackage">
          <div id="wheelpackageplatesdiv">
  
            <div id="wheelpackageimagesplate">
              <div className="wheelpackagehoverhider" id="wheelcolorborderone"
              //  onClick={BodyColouredRoof}
               ><img src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720865130/y_spoke_wheel_satin_bronze_evxbxg.png" className="wheelbodyscaling" alt="" id="wheelbodycolorone"  /></div>
  
              
  
            </div>
          </div>
          <div id="wheelpackageimageinformationsection">
            <div id="wheelpackageimagewithinfo">
              <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720865130/y_spoke_wheel_satin_bronze_evxbxg.png" alt="" id="currentwheelbodyinfoimage" />
              <img src="infobutton.png" alt="" id="infobuttonforwheelbody"
               onClick={showinfofunction} 
               />
            </div>
            <div id="wheelpackageinformationcontent">
              <div id="wheelpackagename">21" Y-spoke wheel - Satin Bronze</div>
            </div>
          </div>
        </div>
      </div>

      <Brakes showinfofunction={showinfofunction}/>
    
    </>
    )
}

export default Wheels;