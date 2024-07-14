import './brakes.css';
import TailLights from '../taillights/taillights';

const Brakes=({showinfofunction})=>{

  return (



    <>
    <div id="brakepackagediv">
        <div id="brakepackage">
          <div id="brakepackageplatesdiv">
  
            <div id="brakepackageimagesplate">
              <div className="brakepackagehoverhider" id="brakecolorborderone"
              //  onClick={BodyColouredRoof}
               ><img src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720869370/carbon_ceramic_brakes_plate_f58dlz.png" className="brakebodyscaling" alt="" id="brakebodycolorone"  /></div>
  
              
  
            </div>
          </div>
          <div id="brakepackageimageinformationsection">
            <div id="brakepackageimagewithinfo">
              <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720869370/carbon_ceramic_brakes_plate_f58dlz.png" alt="" id="currentbrakebodyinfoimage" />
              <img src="infobutton.png" alt="" id="infobuttonforbrakebody"
               onClick={showinfofunction} 
               />
            </div>
            <div id="brakepackageinformationcontent">
              <div id="brakepackagename">Carbon Ceramic Brakes</div>
            </div>
          </div>
        </div>
      </div>


    <TailLights showinfofunction={showinfofunction}/>
    </>
    )
}

export default Brakes;