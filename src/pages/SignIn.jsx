import Header from "../components/Header";
import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {
  const [isRightPanelActive, setRightPanelActive] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handlePanelToggle = () => {
    setRightPanelActive(!isRightPanelActive);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSignUp = async () => {
    const { email, password, name } = formData;
    if (!name || !email || !password) {
      alert("Please fill in all fields before signing up.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Sign-up successful! Redirecting to the homepage...");
      window.location.href = "/HomePage";
    } catch (error) {
      alert(`Error during sign-up: ${error.message}`);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password) {
      alert("Please fill in all fields before signing in.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Sign-in successful! Redirecting to the homepage...");
      window.location.href = "/HomePage";
    } catch (error) {
      alert(`Error during sign-in: ${error.message}`);
    }
  };

  return (
    <>
      <Header />
      <div className="SignInBody">
        <div className={`container ${isRightPanelActive ? "right-panel-active" : ""}`}>
          {/* Sign Up Form */}
          <div className="form-container sign-up-container">
            <form>
              <h1 id="CreateAccount">Create Account</h1>
              <div className="social-container">
                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
              </div>
              <span>Explore talented artists and commission your dream artwork.</span>
              <input
                type="text"
                id="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <button type="button" id="signUpButton" onClick={handleSignUp}>
                Sign Up
              </button>
            </form>
          </div>

          {/* Sign In Form */}
          <div className="form-container sign-in-container">
            <form onSubmit={handleSignIn}>
              <h1>Sign In</h1>
              <div className="social-container">
                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
              </div>
              <span>Enter your credentials to access your account.</span>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <button type="submit" id="signInButton">
                Sign In
              </button>
            </form>
          </div>

          {/* Overlay Section */}
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 id="WelcomeBack">Welcome Back!</h1>
                <p id="ToKeep">To keep connected with us, please login with your personal info</p>
                <button id="ghostWelcomeBack" onClick={handlePanelToggle}>
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, New User!</h1>
                <p id="PiD">Enter your details and start your journey with us.</p>
                <button id="ghostNewUser" onClick={handlePanelToggle}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
