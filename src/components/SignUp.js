import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './Login.css'; // Import your CSS file

const SignUpComponent = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    // Replace 'your-api-endpoint' with the actual API endpoint for sign-up
    const apiUrl = 'https://your-api-endpoint.com/signup';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (response.ok) {
        // Handle successful sign-up
        console.log('Sign-up successful');
      } else {
        // Handle sign-up failure
        console.error('Sign-up failed');
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
    }
  };
 
  return (
    <div className="container">
      <div className="screen">
     
        <div className="screen__content" style={{ backgroundColor: 'white' }}>
          <form className="login">
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                type="text"
                className="login__input"
                placeholder="User name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-envelope"></i>
              <input
                type="email"
                className="login__input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              type="button"
              onClick={handleSignUp}
            >
              <span className="button__text">Sign Up Now</span>
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

export default SignUpComponent;
