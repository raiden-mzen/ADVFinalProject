import React from "react"; 
import HeaderMain from "../components/HeaderMain";


export default function About() {
  return (
    <>
      <HeaderMain />

      <div className="AboutBody">
      <div className="MiddleBody">
      <h1 id="GalleryLandingSloganAbout">What is Kart of Joe?</h1>
      <p id="DescriptionTop">
        Kart of Joe connects art enthusiasts with skilled artists from around
        the world. Commission custom
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        artwork tailored to your vision, from digital illustrations to
        traditional paintings.
      </p>

      <div id="SampleImagesGalleryLanding">
        <img src="Image1.png" alt="GalleryLandingImage1" />
        <img src="Image3.png" alt="GalleryLandingImage2" />
        <img src="Image2.png" alt="GalleryLandingImage3" />
        <img src="Image4.png" alt="GalleryLandingImage4" />
      </div>
    </div>
    </div>
    
      
    </>
  );
}
