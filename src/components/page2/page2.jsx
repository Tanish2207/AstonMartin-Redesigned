import { useEffect, useRef, useState } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './page2.css'



const Page2 = () => {
  gsap.registerPlugin(ScrollTrigger);

  const progCont = useRef(null)
  const [prog1, setProg1] = useState(0);
  const prog1Ref = useRef(null)
  const [prog2, setProg2] = useState(0);
  const [prog3, setProg3] = useState(0);


  // useEffect(() => {
  //   const el = prog1Ref.current;
  //   let interval1;
  //   gsap.to(el, {
  //     scrollTrigger: {
  //       trigger: progCont,
  //       onEnter: () => {
  //         interval1 = setInterval(() => {
  //           if(prog1>= 656)
  //             clearInterval(interval1);
  //           else
  //             setProg1(prog1+4);
  //         }, 4)
  //         return () => clearInterval(interval1);
  //       },
  //       // width: 168,
  //       duration: 3,
  //     }
  //   })
  // }, [prog1])

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (prog1 >= 656) {
        clearInterval(interval1);
      }
      else {
        setProg1(prog1 + 2);
      }
    }, 4);
    return () => clearInterval(interval1)
  }, [prog1])

  useEffect(() => {
    const interval2 = setInterval(() => {
      if (prog2 >= 202) {
        clearInterval(interval2);
      }
      else {
        setProg2(prog2 + 2);
      }
    }, 5);
    return () => clearInterval(interval2)
  }, [prog2])

  useEffect(() => {
    const interval3 = setInterval(() => {
      if (prog3 >= 3.5) {
        clearInterval(interval3);
      }
      else {
        setProg3(prog3 + 0.5);
      }
    }, 100);
    return () => clearInterval(interval3)
  }, [prog3])
  
  return (

    <div className="relative landing2Cont h-screen w-screen grid grid-cols-12 grid-rows-8 px-14 first" style={{ fontFamily: "var(--Nunito)" }}>
      <div className="landing2_right col-start-7 col-span-6 row-start-1 row-span-5">
        <h2>Capturing the essence of Open Road</h2>
        <p>
          Experience the thrill of the road in every curve and contour. Crafted with groundbreaking engineering feats, our vehicles embody five innovations designed to immerse you in the asphalt. Engineered to sharpen your senses and channel relentless power, discover the essence of connection between you and the road that beckons unapologetically.</p>
      </div>

      <div className="absolute bottom-0 w-screen left-0 row-start-7 flex justify-between items-center px-24 h-52 prog-cont rounded-t-2xl" ref={progCont}>
        <div className="single-prog-cont flex flex-col gap-2">
          <div className="flex justify-between pr-4 text-white">
            <div className="flex items-end gap-2">
              <h1 className="text-2xl font-semibold ">Power</h1>
              <p className="text-sm text-slate-200">bhp</p>
            </div>
            <div className="text-2xl font-bold">
              {prog1}
            </div>
          </div>
          <div className="w-64 h-2 bg-slate-800 rounded-md ">
            <div className="h-2 rounded-md" ref={prog1Ref} style={{ width: `${prog1 / 10}%`, backgroundColor: "#FFF" }}></div>
          </div>
        </div>
        <div className="single-prog-cont flex flex-col gap-2">
          <div className="flex justify-between pr-4 text-white">
            <div className="flex items-end gap-2">
              <h1 className="text-2xl font-semibold">Top Speed</h1>
              <p className="text-sm text-slate-200">mph</p>
            </div>
            <div className="text-2xl font-bold">
              {prog2}
            </div>
          </div>
          <div className="w-64 h-2 bg-slate-800 rounded-md ">
            <div className="h-2 bg-cyan-300 rounded-md" style={{ width: `${prog2 / 3}%`, backgroundColor: "#FFF" }}></div>
          </div>
        </div>
        <div className="single-prog-cont flex flex-col gap-2">
          <div className="flex justify-between pr-4 text-white">
            <div className="flex items-end gap-2">
              <h1 className="text-2xl font-semibold">0-100 mph</h1>
              <p className="text-sm text-slate-200">sec</p>
            </div>
            <div className="text-2xl font-bold">
              {prog3}
            </div>
          </div>
          <div className="w-64 h-2 bg-slate-800 rounded-md ">
            <div className="h-2 bg-cyan-300 rounded-md" style={{ width: `${prog3 * 10}%`, backgroundColor: "#FFF" }}></div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Page2;

