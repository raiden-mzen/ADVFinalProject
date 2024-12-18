import Header from "../components/Header";
import React from "react";


export default function Gallery() {
  return (
    <>
      <Header />
      <div className="GalleryBody">
      <div className="MiddleBody">
        <h1 id="GalleryLandingSloganGalleryShureBall">A Curated Collection of Client Commissions</h1>
       

        <div id="SampleImagesGalleryLanding">

          <img src="Image1.png" alt="Gallery Landing Image 1" />
          <img src="Image3.png" alt="Gallery Landing Image 2" />
          <img src="Image2.png" alt="Gallery Landing Image 3" />
          <img src="Image4.png" alt="Gallery Landing Image 4" />
        </div>

        <div id="GalleryLandingPageDescription">
          <p>
            Witness the power of imagination. Explore a gallery of commissioned artwork, ranging from whimsical fantasy illustrations
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to realistic designs. Each piece tells a story, reflecting the unique vision of both the artist and the clients.
          </p>
        </div>
      </div>
      </div>
    </>
  );
}
