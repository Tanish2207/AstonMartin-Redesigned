import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger plugin
import styles from "./page3.module.css";
import Navbar from "./navbar";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  useEffect(() => {
    // GSAP animations with ScrollTrigger
    gsap.from(".arriving", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".arriving",
        start: "top 80%", // Adjust the start position as needed
        end: "bottom 80%", // Adjust the end position as needed
        toggleActions: "play none none reverse" // This makes the animation play when it enters the viewport and reverse when it leaves
      }
    });

    // Additional animations...

  }, []);

  return (
    <div className={`${styles.container} arriving`}>
      <div className={styles.arriving}>
        <h1>Arrange a test drive</h1>
        <p>
          Whether it's the timeless sophistication of the DB11 or the adrenaline-fueled thrill of the Vantage, our test drives promise an unforgettable journey into the world of British automotive excellence. Contact us now to schedule your exclusive test drive and ignite your passion for driving.
        </p>
        <br />
        <p>
          Experience the beauty of Aston Martin in the most exhilarating way possible - behind the wheel of one of our iconic models.
        </p>
        <button>Request a test drive</button>
      </div>
    </div>
  );
};

export default Page3;
