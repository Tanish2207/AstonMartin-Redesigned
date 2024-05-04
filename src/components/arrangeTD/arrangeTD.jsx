import "./arrangeTD.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Footer from "../footer/footer";



const ArrangeTD = () => {
  // const navigate = useNavigate();
  return (
    <>
      <div className="h-screen w-screen px-14 grid grid-cols-12 grid-rows-8 arrTDCont arriving">
        <h1 className="col-start-2 row-start-2 col-span-3 text-2xl font-black" style={{ fontFamily: "var(--Nunito)" }}>Arrange a test drive</h1>
        <p className="col-start-2 row-start-3 col-span-5 text-xl">
          Whether it's the timeless sophistication of the DB11 or the adrenaline-fueled thrill of the Vantage, our test drives promise an unforgettable journey into the world of British automotive excellence. Contact us now to schedule your exclusive test drive and ignite your passion for driving.
        </p>
        <p className="row-start-5 col-start-2 col-span-5 text-xl mt-10">
          Experience the beauty of Aston Martin in the most exhilarating way possible - behind the wheel of one of our iconic models.
        </p>

        {/* <Link to="/tdsteps"> */}
        <button className="col-start-2 row-start-7 col-span-2 w-60 h-14 font-semibold text-xl reqTD-btn flex justify-center items-center "><a href="/tdsteps">Request a test drive</a></button>
        {/* </Link> */}


      </div>
      <Footer />
    </>

  );
};

export default ArrangeTD;
