import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function PageNotFound() {
  return (
    <>
      <div className="ErrorBody">
        <img id="ErrorImage" src="OOPS.png" alt="OOPS ERROR!" />
        <h1 id="ErrorMessageH1">404 - PAGE NOT FOUND</h1>
        <p id="ErrorDescription">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The page you are looking for might have been removed, or has its name changed or is temporarily unavailable.
          <br />
          Don't worry, you can still explore our website. Try searching for what you're looking for or head back to the homepage.
        </p>

        <div id="Button">
          {/* Using Link from react-router-dom for client-side navigation */}
          <Link to="/Home">
            <img src="GoBackToHomePage.png" alt="Go back to Landing Page" />
          </Link>
        </div>
      </div>
    </>
  );
}
