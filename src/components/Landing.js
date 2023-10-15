import React from 'react';

const Landing = () => {
  const buttonStyles = "inline-block px-4 py-2 bg-blue-500 text-white text-lg font-bold rounded-full hover:bg-blue-600 transform hover:scale-105 transition duration-300 ease-in-out";

  return (
    <div
      style={{
        background: `url('https://r4.wallpaperflare.com/wallpaper/914/746/419/abstract-digital-art-minimalism-simple-background-wallpaper-68564d7870703ce8d03c017ef822649a.jpg`,
        height: '100vh',
      }}
      className="relative"
    >
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-4xl text-blue-500 font-extrabold">JobDekho</h1>
        <nav>
          <ul className="flex space-x-4 text-white">
            <li>
              <a
                href="/signup"
                className={`hover:underline text-white transition duration-300 ease-in-out transform hover:scale-110 ${buttonStyles}`}
              >
                Sign Up
              </a>
            </li>
            <li>
              <a
                href="/login"
                className={`hover:underline text-white transition duration-300 ease-in-out transform hover:scale-110 ${buttonStyles}`}
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="#recruiter"
                className={`hover:underline text-white transition duration-300 ease-in-out transform hover:scale-110 ${buttonStyles}`}
              >
                Login as Recruiter
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div
        className="text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ width: '80%' }}
      >
        <h2 className="text-4xl font-bold mb-4">
          Your Gateway to Opportunities
        </h2>
        <p className="text-lg leading-7 ml-auto text-white">
          JobDekho is your one-stop platform for finding your dream job or
          recruiting top talent. Whether you're a job seeker looking for
          opportunities or an employer searching for the perfect candidate,
          JobDekho is here to help you connect. Explore job listings, post job
          opportunities, and make your next career move with confidence. Let us
          help you find the perfect match.
        </p>
        <div className="mt-8">
          <a
            href="#signup"
            className={`inline-block px-8 py-3 bg-blue-500 text-white text-lg font-bold rounded-full hover:bg-blue-600 transform hover:scale-105 transition duration-300 ease-in-out`}
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
