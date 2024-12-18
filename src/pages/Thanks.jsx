import HeaderMain from "../components/HeaderMain";
import React from 'react';

export default function Thanks() {
  return (
    <>
      <HeaderMain />
      <div className="ThanksContainer">
        <div className="ContentInsideThanks">
          {/* Optional image, if you want to use it later */}
          {/* <img id="Image" src="ImageThanks.png" alt="ThanksDrawing" /> */}

          <div className="TopContentThanks">
            <h1 id="SmallDescriptionThanks">Thanks for your order from</h1>
            <h1 id="YellowThanks">Kart of Joe</h1>
          </div>

          <p id="SupportThanks">
            We really appreciate your support and can’t wait to start on your commission.
          </p>

          <div id="ButtonThanks">
            <a href="/HomePage">
              <img
                src="BackToHomepage.png"
                alt="BackToHomepage"
                style={{ width: '200px', height: 'auto' }}
              />
            </a>
          </div>
        </div>
      </div>
     
    </>
  );
}
