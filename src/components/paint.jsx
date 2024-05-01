import './paint.css';
import StartConfiguration from './startconfiguration';


const paint=({handleshowPaintSection})=>
{
  

  handleshowPaintSection();
}
const Paint=()=>{

  
  return(<>
  <div id="paintbar">
  <div id="paintsection">
   <p id="blackandgreys">Black & Greys</p>
   <p id="purplesandblues">Purples & Blues</p>
   <p id="greens">Greens</p>
   <p id="reds">Reds</p>
   <p id="bronzesandoranges">Bronzes & Oranges</p>
   <p id="silversandwhites"> Silvers & Whites</p>
  </div>
  </div>
  </>)
}

export default Paint;