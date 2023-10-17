import React, { useState } from 'react';

const DashBoard = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    if (darkTheme) {
      document.documentElement.classList.remove('dark-theme');
    } else {
      document.documentElement.classList.add('dark-theme');
    }
  };

  if (darkTheme) {
    document.documentElement.classList.add('dark-theme');
  } else {
    document.documentElement.classList.remove('dark-theme');
  }

  const jobListings = [
    { title: 'NodeJS Developer', posted: '10 days ago' },
    { title: 'ReactJS Developer', posted: '5 days ago' },
    { title: 'MERN Developer', posted: '8 days ago' },
    { title: 'MEAN Developer', posted: '2 days ago' },
    { title: 'AWS Developer', posted: '12 days ago' },
    { title: 'JAVA Developer', posted: '7 days ago' },
  ];

  return (
    <div className={`dashboard ${darkTheme ? 'dark-theme' : ''}`}>
      <header className="flex items-center p-4">
        <div className="logo">Your Logo</div>
        <div className="search-bar mx-auto">
          <input type="text" placeholder="Search" className="p-2 rounded-full" />
        </div>
        <div className="flex items-center space-x-4">
          <button className="theme-button bg-blue-500 text-white p-2 rounded hover:bg-blue-600" onClick={toggleTheme}>
            {darkTheme ? 'Light' : 'Dark'} Mode
          </button>
          <div className="avatar-profile">Profile Avatar</div>
        </div>
      </header>
      <div className="dashboard-body flex justify-center items-center h-screen bg-cover bg-center" >
        <div className="job-listings-container w-3/5 h-2/5 bg-white rounded-lg p-4">
          {jobListings.map((job, index) => (
            <div className="job-card border p-4 rounded-lg m-4" key={index}>
              <h3>{job.title}</h3>
              <p className="text-gray-600">Posted {job.posted}</p>
              <button className="apply-button bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Apply</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
