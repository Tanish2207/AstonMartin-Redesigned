import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger plugin
import "./arrangeTD.css";

// Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

const ArrangeTD = () => {
  // useEffect(() => {
  //   // GSAP animations with ScrollTrigger
  //   gsap.from(".arriving", {
  //     opacity: 0,
  //     y: 50,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: ".arriving",
  //       start: "top 80%", // Adjust the start position as needed
  //       end: "bottom 80%", // Adjust the end position as needed
  //       toggleActions: "play none none reverse" // This makes the animation play when it enters the viewport and reverse when it leaves
  //     }
  //   });

  // }, []);

  return (
    <div className="h-screen w-screen px-14 grid grid-cols-12 grid-rows-8 arrTDCont arriving">
      <h1 className="col-start-2 row-start-2 col-span-3 text-2xl font-black" style={{fontFamily: "var(--Nunito)"}}>Arrange a test drive</h1>
      <p className="col-start-2 row-start-3 col-span-5 text-xl">
        Whether it's the timeless sophistication of the DB11 or the adrenaline-fueled thrill of the Vantage, our test drives promise an unforgettable journey into the world of British automotive excellence. Contact us now to schedule your exclusive test drive and ignite your passion for driving.
      </p>
      <p className="row-start-5 col-start-2 col-span-5 text-xl mt-10">
        Experience the beauty of Aston Martin in the most exhilarating way possible - behind the wheel of one of our iconic models.
      </p>
      <button className="col-start-2 row-start-7 col-span-2 w-60 h-14 font-semibold text-xl reqTD-btn flex justify-center items-center">Request a test drive</button>
    </div>
   
  );
};

export default ArrangeTD;
