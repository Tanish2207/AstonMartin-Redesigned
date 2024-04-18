import Navbar from "./navbar";
import styles from "./page2.module.css";

const Page2 = () => {
  return (
    <div className={`${styles.landing2Cont}`}>
      {/* <Navbar /> */}
      <div className={`${styles.capture}`}>

        <div className={`${styles.right} `}>
          <h2 className={`${styles.h1}`}>Capturing the essence of open road</h2>
          Experience the thrill of the road in every curve and contour. Crafted with groundbreaking engineering feats, our vehicles embody five innovations designed to immerse you in the asphalt. Engineered to sharpen your senses and channel relentless power, discover the essence of connection between you and the road that beckons unapologetically.

        </div>
      </div>
      <div className={`${styles.specs}`}>

        <div className={`${styles.power}`}>
          <div className={`${[styles.powertext]}`}>Power <span className={`${styles.bhp}`}>bhp</span>  <span className={`${styles.num}`}>656</span></div>
          <div className={`${styles.powerbar}`}><span className={`${styles.powerprogress}`}>
          </span></div>
        </div>
      </div>

    </div>)
}

export default Page2;