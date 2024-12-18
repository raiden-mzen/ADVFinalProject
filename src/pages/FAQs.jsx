import React from 'react';
import HeaderMain from "../components/HeaderMain";
import FooterDark from "../components/FooterDark";

export default function FAQs() {
  return (
    <>
      <HeaderMain />
      <div>
        {/* Upper section */}
        <div className="FAQSBODY">
        <div className="upperSection">
          <div className="leftSideUpper">
            <h1>FAQs</h1>
            <h4>
              Have questions? Here you'll find the answers most
              <br />
              valued by our partners, along with access to
              <br />
              step-by-step instructions and support.
            </h4>
          </div>

          <div className="rightSideUpper">
            <img src="babaeSaFAQs.png" alt="FAQs Image" />
          </div>
        </div>

        {/* Lower section */}
        <div className="lowerSection">
          {/* Left side */}
          <div className="leftSideLower">
            <p id="howLongWillItTake">
              ❓How long will it take for the artist to finish the commission?
            </p>
            <p id="howLongAnswer">
              💡The artist is committed to delivering the commission as soon as possible.
              <br />
              They will keep you updated on the progress.
            </p>

            <p id="howMuch">❓How much does an artwork cost?</p>
            <p id="howMuchAnswer">
              💡Artwork prices vary widely based on artist reputation, type of artwork,
              <br />
              materials, size, and unique features.
            </p>

            <p id="canISee">❓Can I see my commission in progress?</p>
            <p id="canISeeAnswer">
              💡Yes, you can often see your commission in progress.
              <br />
              This allows you to provide feedback and make changes as needed.
            </p>
          </div>

          {/* Right side */}
          <div className="rightSideLower">
            <p id="allowedToCancel">❓Am I allowed to cancel my commission?</p>
            <p id="allowedToCancelAnswer">
              💡You may be able to cancel your commission if the artist hasn't
              started working on it.
              <br />
              Once they begin, cancellation may not be possible.
            </p>

            <p id="howDoesItWork">❓How does your commission website work?</p>
            <p id="howDoesItWorkAnswer">
              💡Our website connects artists with clients who want custom artwork.
              Clients provide
              <br />
              specific details about their desired piece, and artists submit
              <br />
              proposals. Once a client
              <br />
              chooses an artist, they work together to bring the vision to life.
            </p>
          </div>
        </div>
      </div>
      </div>

      <FooterDark />
    </>
  );
}
