import React, { useState } from "react";

function SelectDealer_Loader() {
  const [waitMore, setWaitMore] = useState(false);

  const timer = setTimeout(() => {
    setWaitMore(true);
  }, 5000);

  return (
    <div
      className="h-screen w-full pt-32 text-white"
      style={{ backgroundColor: "#171818" }}
    >
      <h2 className="font-bold text-xl mb-10 px-40">
        1. Select nearest Dealer
      </h2>
      <div className="w-3/4 mx-auto" style={{ backgroundColor: "#565656" }}>
        <div className="my-10 flex flex-col gap-4 mx-auto px-8 py-6 rounded-sm  animate-pulse">
          <div className="h-5 w-1/2  rounded-sm bg-gray-400"></div>
          <div className="h-2 w-1/2  rounded-sm bg-gray-300 mb-6"></div>
          <div className="flex gap-2 h-3 w-1/2  rounded-sm bg-gray-300"></div>
          <div className="flex gap-2 h-3 w-1/2  rounded-sm bg-gray-300"></div>

          <div className="h-10 w-full  rounded-sm bg-gray-400"></div>
          <div className="h-10 w-full  rounded-sm bg-gray-400"></div>
        </div>
      </div>
      {waitMore && (
        <div>
          <p className="text-center text-lg ">
            As the backend is hosted on {" "}
            <a
              className="text-blue-300"
              href="https://www.render.com"
              target="_blank"
            >
              render.com
            </a>{", "}
            it may take about a minute to fetch data 😅
          </p>
          <p className="text-center text-lg ">Sorry for the inconvenience</p>
        </div>
      )}
    </div>
  );
}

export default SelectDealer_Loader;
