import HeaderMain from "../components/HeaderMain";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 


export default function CommissionPage() {
  const [email, setEmail] = useState('');
  const [request, setRequest] = useState('');
  const navigate = useNavigate(); 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRequestChange = (e) => {
    setRequest(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    alert(`Email: ${email}\nRequest: ${request}`);
    navigate('/Thanks'); 
  };

  return (
    <>
      <HeaderMain />
      <div className="bodeh">
        <div className="LeftSideContent">
          <div className="TopDescription">
            <h1 id="top">Looks like you're</h1>
            <h1 id="yellow">ready</h1>
            <h1 id="bottom">to start your</h1>
            <h1 id="pink">Commission</h1>
          </div>

          <p id="shortDescription">
            Get ready to bring your creative vision to life! Please fill out
            <br />
            the details on the right side of your screen to start your
            <br />
            commission. Remember to review our guidelines carefully
            <br />
            before submitting your request.
          </p>

          <div id="ButtonComms">
            <a id="submitButtonLink" href="javascript:void(0)" onClick={handleSubmit}>
              <img
                src="CommissionNowButton.png"
                alt="Ready To Commission?"
                style={{ width: '300px', height: 'auto' }}
              />
            </a>
          </div>
        </div>

        <div className="RightSideContent">
          <div className="CommissionSheetContainer">
            <h1 id="Comms"> COMMISSION SHEET </h1>
            <form onSubmit={handleSubmit}> {/* Wrap inputs with form to handle submission */}
              <div className="Question1">
                <h5>
                  1. Please Enter your Email for us to contact you about
                   the progress of your commission.
                </h5>
                <p>Email Address</p>
                <input
                  id="Email"
                  type="email"
                  placeholder="Email"
                  maxLength="50"
                  required
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>

              <div className="Question2">
                <h5>
                  2. Please provide details about the type of art
                   commission you envision.
                </h5>
                <p>What kind of art do you want to commission?</p>
                <input
                  id="Request"
                  type="text"
                  placeholder="Please provide details."
                  maxLength="200"
                  required
                  value={request}
                  onChange={handleRequestChange}
                />
              </div>

              <button type="submit" style={{ display: 'none' }} /> {/* Hidden submit button */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
