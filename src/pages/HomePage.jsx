import React from "react";
import HeaderMain from "../components/HeaderMain";

export default function Home() {
  return (
    <>
      <HeaderMain />
      <div className="HomePageBody">
      <div>
      <h1 id="BigKart">KART OF JOE</h1>

      <p id="Description">
        Simplify your art commission process. With Kart of Joe, finding talented artists, discussing your ideas, and tracking
        <br />
        your project's progress is easier than ever.
      </p>

      <div className="BottomTwo">
        <div id="ButtonHomeHone">
          <a href="/CommissionPage">
            <img
              src="CommissionNowButton.png"
              alt="Ready To Commission?"
            />
          </a>
        </div>

        <div className="Slanting">
          <img src="RSlanting.png" alt="Slanting" />
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
