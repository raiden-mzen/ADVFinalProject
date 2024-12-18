import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate for navigation
import { getAuth, signOut } from 'firebase/auth'; // Import Firebase signOut
import './HeaderMain.css';

function HeaderMain() {
  const navigate = useNavigate();
  const auth = getAuth(); // Get the Firebase Auth instance

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Redirect to Sign In page after successful logout
        navigate('/SignIn');
      })
      .catch((error) => {
        console.error('Error signing out:', error); // Handle errors
        alert('Failed to log out. Please try again.');
      });
  };

  return (
    <header>
      <div className="NavBar">
        <ul>
          <li id="WebsiteName">Kart Of Joe</li>
          <li>
            <Link to="/HomePage">Home Page</Link>
          </li>
          <li>
            <Link to="/Guidelines">Guidelines</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/faqs">FAQs</Link>
          </li>
          <li>
            <Link to="/Contacts">Contacts</Link>
          </li>
          <li>
            <button onClick={handleLogout} className="NavBar-logout">
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default HeaderMain;
