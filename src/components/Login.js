import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import Swal from "sweetalert2";
import "./Login.css"; // Import your CSS file
import axios from "axios";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/signup");
  };
  const handleLogin = async () => {
    // You should replace 'your-api-endpoint' with the actual API endpoint
    // const apiUrl = 'http://localhost:4001/login';
    const apiUrl =
      "https://zgfxhztr2h.execute-api.us-east-1.amazonaws.com/dev/login";
    // const apiUrl = `${process.env.API}/login`
    console.log(process.env.API);
    try {
      if (email.length === 0 || password.length === 0) {
        Swal.fire({
          icon: "error",
          title: "Please fill all the fields",
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
        });

        return;
      }

      if (!email.includes("@")) {
        Swal.fire({
          icon: "error",
          title: "Please provide proper email address",
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }

      const response = await axios.post(apiUrl, {
        email,
        password,
      });

      console.log(response);
      // return;
      if (response.status === 200) {
        console.log("Sign-up successful");
        Swal.fire({
          icon: "success",
          title: "Sign-up successful",
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
        });
        localStorage.setItem("token", response.data.token);
        navigate("/home");
      } else {
        // Handle sign-up failure
        console.error("Sign-up failed", response.data);
        Swal.fire({
          icon: "error",
          title: response.data.message,
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content" style={{ backgroundColor: "white" }}>
          <form className="login">
            {/* <h1 className="login__heading">ModernAI</h1> */}
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                type="text"
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
        <div className="screen__background">{/* ... (unchanged) */}</div>
      </div>
    </div>
  );
};

export default LoginComponent;
