import StartConfiguration from './startconfiguration';
import './interior.css';
import PrimaryColor from './primarycolor';


const Interior =(props)=>{




  const SportsPlusSeat=(props)=>{

    //  sportsplusseat=true;
    //  performanceseat=false;
    document.querySelector("#img1").src="sports_plus_seat_frontview.jpg";
    document.querySelector("#img2").src="sports_plus_seat_steeringview.jpg";
    document.querySelector("#img3").src="sports_plus_seat_steeringleftbackview.jpg";
    document.querySelector("#img4").src="sports_plus_seat_sideview.jpg";


    document.querySelector("#currentseatinfoimage").src="sports_plus_seat_plate.png";
    document.querySelector("#seatname").innerHTML="Sports Plus Seat";
    


    document.querySelector("#colorimage img").style.left="-36px";
    document.querySelector("#colorimage img").src="sports_plus_seat_plate_information.png";
    document.querySelector("#colorimage img").style.background="#dadada";
    document.querySelector("#colorcardcolorname").innerHTML="Sports Plus Seat";
    document.querySelector("#colorcardcolorinformation").innerHTML="The Sports Plus Seat offers added visual presence, enhanced driver support and enhanced adjustability (with 16 way adjust).";



    document.querySelector("#colorcard").style.width="82vw";
    document.querySelector("#colorcard").style.transform="translate(11%,-8%)";
    document.querySelector("#colorimage img").style.width="780px";
    document.querySelector("#colorinformation").style.width="520px";
    document.querySelector("#colorinformation").style.left="700px";

  }

  const PerformanceSeat=()=>{

    // performanceseat=true;
    // sportsplusseat=false;
    document.querySelector("#img1").src="performance_seat_frontview.jpg";
    document.querySelector("#img2").src="performance_seat_steeringview.jpg";
    document.querySelector("#img3").src="performance_seat_steeringleftbackview.jpg";
    document.querySelector("#img4").src="performance_seat_sideview.jpg";

    document.querySelector("#currentseatinfoimage").src="performance_seat_plate.png";
    document.querySelector("#seatname").innerHTML="Performance Seat";


    document.querySelector("#colorimage img").src="performance_seat_plate_information.png";
    document.querySelector("#colorimage img").style.left="-36px";
    document.querySelector("#colorimage img").style.background="#dadada";
    document.querySelector("#colorcardcolorname").innerHTML="Performance Seat";
    document.querySelector("#colorcardcolorinformation").innerHTML="Full Satin 2x2 Twill Carbon Fibre performance seat combines lightweight construction with uncompromised support and comfort. In the pursuit of weight saving the performance seat has 6 way adjustability with heating function as standard.";



    document.querySelector("#colorcard").style.width="82vw";
    document.querySelector("#colorcard").style.transform="translate(11%,-8%)";
    document.querySelector("#colorimage img").style.width="780px";
    document.querySelector("#colorinformation").style.width="520px";
    document.querySelector("#colorinformation").style.left="700px";

  }


  const PrimaryColorDisplay=()=>{
    document.querySelector("#primarycolorwindow").style.display="block";
    document.querySelector("#seatingdiv").style.display="none";
   

    document.querySelector("#img1").src="performance_seat_frontview.jpg";
        document.querySelector("#img2").src="performance_seat_steeringview.jpg";
        document.querySelector("#img3").src="performance_seat_steeringleftbackview.jpg";
        document.querySelector("#img4").src="performance_seat_sideview.jpg";

        document.querySelector("#primarycolorp").style.borderBottom="2px solid white";
        document.querySelector("#seatingp").style.borderBottom="none";
  }
const Showseats=()=>{
  document.querySelector("#primarycolorwindow").style.display="none";
  document.querySelector("#seatingdiv").style.display="block";
  document.querySelector("#seatingp").style.borderBottom="1px solid white";
  document.querySelector("#primarycolorp").style.borderBottom="none"
}



  return(<>
  {/* <StartConfiguration   /> */}
  {/* <PrimaryColor  sportsplusseat={sportsplusseat} performanceseat={performanceseat}/> */}
  <div id="interiorwindow">
    <div id="interiorsection">
      <div id="interiorbar">
        <p>Environments</p>
        <p>Inspire Sport- Duotone</p>
        <p onClick={Showseats} id="seatingp">Seating</p>
        <p onClick={PrimaryColorDisplay} id="primarycolorp">Primary Colour</p>
        <p>Secondary Colour</p>
        <p>Headlining</p>
      </div>

      <div id="seatingdiv">
        <div id="seating">
          <div id="seatimagesplate">
           <div className="seathoverhider"><img src="sports_plus_seat_plate.png" className="seatscaling" alt=""onClick={()=>{SportsPlusSeat();}} /></div> 
           <div className="seathoverhider"> <img src="performance_seat_plate.png" className="seatscaling" alt="" onClick={()=>{PerformanceSeat()}} /></div> 

          </div>
          <div id="seatimageinformationsection">
            <div id="seatimagewithinfo">

            <img src="sports_plus_seat_plate.png" alt="" id="currentseatinfoimage" />
            <img src="infobutton.png" alt="" id="infobuttonforseat"onClick={()=>{props.showinfofunction();}}/>
            </div>
            <div id="seatinformationcontent">
              <div id="seatname">Sports Plus Seat</div>

            </div>




          </div>
        </div>
      </div>
    </div>
    
  </div>
  
  </>)
}

export default Interior