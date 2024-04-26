// import styles from './preloader.module.css';
//import logo  from 'logo.png';
// import './preloader.png';


// import './preloader.css';

// const Preloader=()=>{
//   return (<>
//   <div className="prealoader">

//     <img src="logo.svg" alt="" />
//     <p >ASTON MARTIN</p>
//   </div>
  
//   </>)
// }

// export default Preloader;


// import React, { useEffect } from 'react';
// import { TweenMax, Power3 } from 'gsap';

//   useEffect(() => {
  //     // Animation for the logo (increase opacity, move up, and scale down)
  //     // TweenMax.fromTo(".prealoader img", 1.5, { opacity: 0, y: "50px", scale: 1.5 }, { opacity: 1, y: 0, scale: 1, ease: Power3.easeInOut });
  //     TweenMax.from("preloader img",3, {opacity:0,})
  
  //     // Animation to hide the text (decrease opacity)
  //     // TweenMax.to(".prealoader p", 0.5, { opacity: 0, delay: 1 }); // Delay hides the text after logo animation completes
  
  //     TweenMax.from(".preloader p",0.5,{textSpacing:20})
  //   }, []);
  // import React, { useEffect } from 'react';
  // import { TweenMax, Power3 } from 'gsap';
  // import './preloader.css';
  
  // const Preloader = () => {
  //   useEffect(() => {
  //     // Animation for the text (increase opacity and decrease letter-spacing)
  //     TweenMax.fromTo(".prealoader p", 1, { opacity: 0, letterSpacing: "50px" }, { opacity: 1, letterSpacing: "0px", ease: Power3.easeInOut });
  
  //     // Animation for the logo (increase opacity)
  //     TweenMax.fromTo(".prealoader img", 4, { opacity: 0 }, { opacity: 1, ease: Power3.easeInOut });
  //   }, []);
  
  //   return (
  //     <div className="prealoader">
  //       <img src="logo.svg" alt="" />
  //       <p>ASTON MARTIN</p>
  //     </div>
  //   );
  // }
  
  // export default Preloader;



  import React, { useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap';
import './preloader.css';

const Preloader = () => {
  useEffect(() => {
    // Animation for the text (increase opacity and decrease letter-spacing)
    TweenMax.fromTo(".prealoader p", 1, { opacity: 0, letterSpacing: "40px" }, { opacity: 1, letterSpacing: "0px", ease: Power3.easeInOut });

    // Animation for the logo (increase opacity)
    TweenMax.fromTo(".prealoader img", 4, { opacity: 0 }, { opacity: 1, ease: Power3.easeInOut });

    // Animation for moving the image up with decreasing scale
    TweenMax.fromTo(".prealoader img", 6, { delay:2, y: 0, scale: 1 }, { y: -300, scale: 0.5, ease: Power3.easeInOut });

    TweenMax.fromTo(".prealoader p",2,{opacity:1}, {opacity:0});
  }, []);

  return (
    <div className="prealoader">
      <img id="logo" src="logo.svg" alt="" />
      <p>ASTON MARTIN</p>
    </div>
  );
}

export default Preloader;

  


