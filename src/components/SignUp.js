import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import Swal from 'sweetalert2';
import './Login.css'; // Import your CSS file
import  axios  from 'axios';

const SignUpComponent = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSignUp = async () => {
    const apiUrl = 'http://localhost:4001/signup';

    try {

      if(email.length === 0 || password.length === 0 || username.length === 0 ) {
        Swal.fire({
            icon: 'error',
            title: 'Please fill all the fields',
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
          });

          return;  
      }
      if(!email.includes('@')) {
        Swal.fire({
            icon: 'error',
            title: 'Please provide proper email address',
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
          });
          return;
      }
     
        const response = await axios.post(apiUrl, {
            username,
            email,
            password,
        });

      console.log('RESPONSE ::: ', response)
      if (response.ok) {
        // Handle successful sign-up
        console.log('Sign-up successful');
        Swal.fire({
            icon: 'success',
            title: 'Sign-up successful',
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
          });
          localStorage.setItem('token', response.data.token)    
          navigate('/home')
      } else {
        // Handle sign-up failure
        console.error('Sign-up failed');
        Swal.fire({
            icon: 'error',
            title: response.data.message,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
          });
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
