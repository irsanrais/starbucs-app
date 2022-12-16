import React from "react";
import "./home.css";

function Home() {
  return (
    <>
      <div className="left place-content-center">
        <h1>Joy To You</h1>
      </div>
      <div className="right">
        <h1 className="my-4">Starbucks Rewards</h1>
        <div className="flex flex-row my-2">
          <div className="flex flex-col">
            <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/rewards-carousel-1_tcm121-77064.jpg" style={{ height: "100px", width: "150px" }} />
            <p>let us treat you-earn and redeem stars for free drinks, food and more</p>
          </div>
          <div className="flex flex-col">
            <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/rewards-carousel-2_tcm121-77065.jpg" style={{ height: "100px", width: "150px" }} />
            <p>Costomize your order in the app and pick it up when it's ready</p>
          </div>
          <div className="flex flex-col">
            <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/rewards-carousel-3_tcm121-77066.jpg" style={{ height: "100px", width: "150px" }} />
            <p>Stop in on your birthday for a special treat on the house</p>
          </div>
        </div>
        <span>
          <button className="bg-white text-black px-3 py-1 rounded-full border border-slate-900 mr-3">JOIN NOW</button>
        </span>
        <span>
          <button className="bg-black text-white px-3 py-1 rounded-full">Learn More</button>
        </span>
        <div className="bg-gray-300 px-2 py-2">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white place-content-center mx-7 my-7 ">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Answer a few questions to find something new</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
