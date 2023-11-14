import React, { useState } from 'react';

const JobUploadForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [jobDetails, setJobDetails] = useState({
    jobName: '',
    jobRole: '',
    company: '',
    salaryRange: '',
    experienceLevel: '',
  });

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the job details submission here (e.g., send to a server).
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-between">
          <div className="w-1/4">
            <img src="your-logo.png" alt="Company Logo" className="w-16 h-16" />
          </div>
          <div className="w-1/4">
            <img src="avatar.png" alt="User Avatar" className="w-16 h-16" />
          </div>
          <div className="w-1/4 text-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full focus:outline-none"
              onClick={openModal}
            >
              Upload Job
            </button>
          </div>
        </div>
        <div className={`modal ${showModal ? 'block' : 'hidden'}`}>
          <div className="modal-content">
            <span className="close text-2xl" onClick={closeModal}>&times;</span>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Job Name:</label>
                <input
                  type="text"
                  name="jobName"
                  value={jobDetails.jobName}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              {/* Repeat the above pattern for other form fields: Job Role, Company, Salary Range, and Experience Level. */}
              
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full focus:outline-none"
              >
                Upload Job
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobUploadForm;
