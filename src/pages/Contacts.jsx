import React, { useState } from "react"; 
import HeaderMain from "../components/HeaderMain";

export default function Contacts() {
  const [responseMessage, setResponseMessage] = useState("");

  const sendMessage = () => {
    setResponseMessage(
      "Thank you for contacting us, please wait for us to process the message that you have sent."
    );

    setTimeout(() => {
      setResponseMessage("");
    }, 3000); 
  };

  return (
    <>
    <HeaderMain />

    <div className="ContactsBody">
      <div className="MiddleContainer">
        <div className="leftSide">
          <p id="SmallContact">CONTACT</p>
         
          <h1 id="GetInContact">Get In Contact</h1>
          <p id="contactDescription">
            Got questions or need assistance? Reach out to us through our contact form for
            inquiries about Kart Of Joe! Whether you’re interested in our commissions, need
            help navigating the site, or just want more information about what we offer, we're
            here to help make your experience as smooth as possible.
          </p>
        </div>

        <div className="MessageContainer">
          <div className="rightSide">
            <input 
              id="Name" 
              type="text" 
              placeholder="Name" 
              maxLength="50" 
              required
            />

            <input 
              id="Email" 
              type="text" 
              placeholder="Email" 
              maxLength="50" 
              required
            />

            <input 
              id="PhoneNumber" 
              type="text" 
              placeholder="Phone Number" 
              maxLength="50" 
              required
            />

            <input 
              id="Message" 
              type="text" 
              placeholder="Message" 
              maxLength="50" 
              required
            />

            <div id="button">
              <img 
                src="sendMessageButton.png" 
                alt="Send Message" 
                style={{ width: "150px", height: "auto", cursor: "pointer" }} 
                onClick={sendMessage}
              />
            </div>
            {responseMessage && (
              <p id="responseMessage" style={{ display: "block", color: "green", marginTop: "10px" }}>
                {responseMessage}
              </p>
            )}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
