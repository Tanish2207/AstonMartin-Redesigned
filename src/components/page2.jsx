
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import Navbar from "./navbar";

import styles from "./page2.module.css";
import Navbar from "./navbar";



const Page2 = () => {
  const [prog1, setProg1] = useState(656);
  const [prog2, setProg2] = useState(202);
  const [prog3, setProg3] = useState(3.5);

  // const int1 = setTimeout(() => {
  //   setProg1((prev) => prev + 1)
  // }, 20);

  // useEffect(() => {
  //   if (prog1 >= 656) {
  //     clearTimeout(int1);
  //   }
  // }, [prog1])

  // const int2 = setTimeout(() => {
  //   setProg2(prev => prev + 1)
  // }, 20);

  // useEffect(() => {
  //   if (prog2 >= 202) {
  //     clearTimeout(int2);
  //   }
  // }, [prog2])

  // const int3 = setTimeout(() => {
  //   setProg3((prev) => prev + 1)
  // }, 20);

  // useEffect(() => {
  //   if (prog3 >= 3.5) {
  //     clearTimeout(int3);
  //   }
  // }, [prog3])
  
  return (
    <div className={`${styles.landing2Cont}`} style={{ fontFamily: "var(--Nunito)" }}>
      <div className={`${styles.landing2_right} `}>
        <h2 className={`${styles.h1}`}>Capturing the essence of Open Road</h2>
        <p>
          Experience the thrill of the road in every curve and contour. Crafted with groundbreaking engineering feats, our vehicles embody five innovations designed to immerse you in the asphalt. Engineered to sharpen your senses and channel relentless power, discover the essence of connection between you and the road that beckons unapologetically.</p>
      </div>

      {/* <div className="prog-cont flex justify-between items-center px-10">
        <div className="single-prog-cont flex flex-col gap-2">
          <div className="flex justify-between pr-4 text-white">
            <div className="flex items-end gap-2">
              <h2>Power</h2>
              <p className="text-sm text-slate-200">bhp</p>
            </div>
            <div>
              {prog1}
            </div>
          </div>
          <div className="w-64 h-2 bg-slate-500 rounded-md ">
            <div className="h-2 bg-cyan-300 rounded-md" style={{ width: `${prog1/10}%` }}></div>
          </div>
        </div>
        <div className="single-prog-cont flex flex-col gap-2">
          <div className="flex justify-between pr-4 text-white">
            <div className="flex items-end gap-2">
              <h2>Top Speed</h2>
              <p className="text-sm text-slate-200">mph</p>
            </div>
            <div>
              {prog2}
            </div>
          </div>
          <div className="w-64 h-2 bg-slate-500 rounded-md ">
          <div className="h-2 bg-cyan-300 rounded-md" style={{ width: `${prog2/10}%` }}></div>
          </div>
        </div>
        <div className="single-prog-cont flex flex-col gap-2">
          <div className="flex justify-between pr-4 text-white">
            <div className="flex items-end gap-2">
              <h2>0-100 mph</h2>
              <p className="text-sm text-slate-200">sec</p>
            </div>
            <div>
              {prog3}
            </div>
          </div>
          <div className="w-64 h-2 bg-slate-500 rounded-md ">
          <div className="h-2 bg-cyan-300 rounded-md" style={{ width: `${prog3*10}%` }}></div>
          </div>
        </div>
      </div> */}
      </div>
)

export default Page2;
