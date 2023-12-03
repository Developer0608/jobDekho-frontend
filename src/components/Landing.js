import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Import your CSS file

const LandingPage = () => {
    const navigate = useNavigate();
    const handleLoginClick = () => {
        console.log('I am in Login')
        navigate("/login");
      };
    
      const handleSignupClick = () => {
        navigate('/signup');
      };

  return (
    <div className="landing-container">
      <div className="header">
        <div className="brand">
          <h1>ModernAI</h1>
          <span>Your Intelligent Companion</span>
        </div>
        <div className="buttons">
          <button className="login-button" onClick={handleLoginClick}>Login</button>
          <button className="signup-button" onClick={handleSignupClick}>Sign Up</button>
        </div>
      </div>
      <div className="content">
      <h2>Welcome to the Future</h2>
        <p>
          ModernAI is not just an AI, it's your intelligent companion on the
          journey to the future. With state-of-the-art artificial intelligence,
          ModernAI is designed to assist and empower you in various aspects of
          your digital life.
        </p>
        <p>
          From natural language understanding to task automation, ModernAI is
          here to make your interactions seamless and efficient. Imagine having
          an assistant that learns, adapts, and grows with you over time,
          enhancing your overall experience.
        </p>
        <div className="quotes">
           
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
