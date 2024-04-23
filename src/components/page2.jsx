import React, { useEffect } from "react";
import { gsap } from "gsap";
import styles from "./page2.module.css";
import Navbar from "./navbar";

const Page2 = () => {
  useEffect(() => {
    gsap.from(".power", {
      delay:1,
      opacity: 0,
      y: 100,
      duration: 1,
    });

    gsap.from(".speed", {
      
      opacity: 0,
      y: 100,
      duration: 1,
      delay: 1.5, // Delay the animation for a staggered effect
    });

    gsap.from(".mile", {
      
      opacity: 0,
      y: 100,
      duration: 1,
      delay: 2, // Delay the animation for a staggered effect
    });
  }, []);

  return (
    <div className={styles.landing2Cont}>
      <div className={styles.capture}>
        <div className={styles.right}>
          <h2 className={styles.h1}>Capturing the essence of open road</h2>
          <p>
            Experience the thrill of the road in every curve and contour. Crafted with groundbreaking engineering feats, our vehicles embody five innovations designed to immerse you in the asphalt. Engineered to sharpen your senses and channel relentless power, discover the essence of connection between you and the road that beckons unapologetically.
          </p>
        </div>
      </div>
      <div className={styles.specs}>
        <div className={`${styles.power} power`}>
          <div className={styles.powertext}>Power <span className={styles.bhp}>bhp</span> <span className={styles.num}>656</span></div>
          <div className={styles.powerbar}>
            <div className={styles.powerprogress}></div>
          </div>
        </div>
        <div className={`${styles.speed} speed`}>
          <div className={styles.speedtext}>Top Speed<span className={styles.mph}>mph</span> <span className={styles.speednum}>202</span></div>
          <div className={styles.speedbar}>
            <div className={styles.speedprogress}></div>
          </div>
        </div>
        <div className={`${styles.mile} mile`}>
          <div className={styles.miletext}>0-62<span className={styles.milebhp}>mph s</span> <span className={styles.milenum}>3.5</span></div>
          <div className={styles.milebar}>
            <div className={styles.mileprogress}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
