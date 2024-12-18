import React from "react";
import HeaderMain from "../components/HeaderMain";

export default function Guidelines() {
  return (
    <>
      <HeaderMain />

      <div className="GuideLinesBody"> 
  
      <div
        className="UpperSection"
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          className="leftSideUpper"
          style={{
            paddingLeft: "150px",
            paddingTop: "90px",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: "lighter",
          }}
        >
          <h1
            id="guide"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "90px",
            }}
          >
            GUIDELINES
          </h1>
          <p
            id="bastalines"
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Protecting your private information is our priority.
            <br />
            <br />
            This Statement of Privacy applies to Kart of Joe and governs data collection and usage.
            <br />
            For the purposes of this Privacy Policy, unless otherwise noted, all references to Kart of Jo.
            <br />
            The Kart of Jo website is an e-commerce site. By using the Kart of Jo website, you
            consent to the data practices described in this statement.
          </p>
        </div>

        <div
          className="rightSideUpper"
          style={{
            paddingLeft: "300px",
            paddingTop: "170px",
          }}
        >
          <img id="GuideLinesBook" src="GuideLinesBook.png" alt="Guidelines Image" />
          
        </div>
      </div>

      <div
        className="LowerSection"
        style={{
          paddingTop: "30px",
          paddingBottom: "100px",
          paddingLeft: "50px",
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: "lighter",
        }}
      >
        <h3
          id="linespart2"
          style={{
            paddingTop: "50px",
            paddingBottom: "20px",
          }}
        >
          To ensure a smooth and enjoyable commission experience for both artists and clients, please adhere to the following
          <br />
          guidelines:
        </h3>

        <p id="RespectfulConduct">📌Respectful Conduct</p>
        <p id="RespectfulConductDesciption">
          Treat all artists and clients with respect.
          <br />
          Avoid any form of harassment, discrimination, or offensive behavior.
        </p>

        <p id="CommissionProcess">📌Commission Process</p>
        <p id="CommissionProcessDesciption">
          Clear Communication: Clearly communicate your vision and expectations to the artist.
          <br />
          Payment: Full payment is required before the artist begins work.
          <br />
          Deadlines: Establish reasonable deadlines for both parties.
          <br />
          Revisions: A limited number of revisions are typically included, but additional revisions may incur extra charges.
        </p>

        <p id="ArtGuidelinesConduct">📌Art Guidelines</p>
        <p id="ArtGuidelinesDesciption">
          NSFW and Hate Art: Strictly prohibited. Any commission request violating these guidelines will be rejected.
          <br />
          Copyright: The artist retains the copyright to their artwork, unless otherwise agreed upon.
          <br />
          Usage Rights: Clearly define the intended usage of the artwork (e.g., personal use, commercial use).
        </p>

        <p id="DisputeResolution">📌Dispute Resolution</p>
        <p id="DisputeResolutionDesciption">
          In case of disputes, both parties should attempt to resolve the issue amicably.
          <br />
          If a resolution cannot be reached, a neutral third party may be involved.
        </p>
      </div>
      </div>
    </>
  );
}
