import React from 'react';
import Header from "../components/Header";
import '../App.css';

export default function Home() {
  return (
    <>
      <Header />

      <div className="bodyy">
        <div className="MiddleContainer">
          <div className="LeftContent">
            <div className="LandingPageSlogan">
              <h1 id="Unleash">Unleash your</h1>
              <h1 id="yellowCreativityLandingPage">Creativity</h1>
              <h1 >Commission Your</h1>
              <h1 id="pinkCreativityLandingPage">Masterpiece</h1>
            </div>

            <div className="SmallDescriptionLandingPage">
              <p id="SideDescriptionLandingPage">
                Simplify your art commission process.<br />
                Our platform connects you with talented artists,<br />
                streamlines communication, and ensures a smooth<br />
                transaction, from concept to completion.
              </p>
            </div>
          </div>

          <div className="SampleImagesLandingPage">
            <img id="LImage1" src="Image4.png" alt="LandingPageImage1" />
          </div>

        </div>
      </div>

      <div id="ButtonHome">
            <a href="SignIn.html">
              <img
                src="CommissionNowButton.png"
                alt="Ready To Commission?"
                style={{ width: '300px', height: 'auto' }}
              />
            </a>
          </div>
    </>
  );
}
