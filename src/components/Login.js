import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import './Login.css'; // Import your CSS file

const YourComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const handleSignUp = () => {
     navigate('/signup');
  }
  const handleLogin = async () => {
    // You should replace 'your-api-endpoint' with the actual API endpoint
    const apiUrl = 'https://your-api-endpoint.com/login';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        console.log('Login successful');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content" style={{backgroundColor : 'white'}}>
          <form className="login">
          {/* <h1 className="login__heading">ModernAI</h1> */}
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                type="text"
                className="login__input"
                placeholder="User name / Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="password"
                className="login__input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="button login__submit"
              type="button" // Use type="button" to prevent form submission
              onClick={handleLogin}
            >
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
            <button
              className="button login__submit"
              type="button" // Use type="button" to prevent form submission
              onClick={handleSignUp}
            >
              <span className="button__text">Didn't Have Account</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
        </div>
        <div className="screen__background">
          {/* ... (unchanged) */}
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
