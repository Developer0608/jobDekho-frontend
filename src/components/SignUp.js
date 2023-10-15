import React from 'react';

const SignUp = () => {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <img
        src="https://c0.wallpaperflare.com/path/751/2/550/chart-graph-business-finance-e32ee24807945ae9a6f2003739b691fd.jpg"
        alt="logo"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '150px', // Add margin from the right side
          transform: 'translateY(-50%)',
          width: '500px',
          padding: '20px',
          background: 'rgba(255, 255, 255, 0.7)',
          borderRadius: '40px',
          boxShadow: '0 0 50px rgba(0, 0, 0, 0.2)',
        }}
      >
        <h2 className="text-3xl font-semibold text-center mb-4">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your password"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Confirm your password"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transform hover:scale-105 transition duration-300 ease-in-out"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
