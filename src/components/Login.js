import React from 'react';

const Login = () => {
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
                    right: '250px', // Add margin from the right side
                    transform: 'translateY(-50%)',
                    width: '300px',
                    padding: '20px',
                    background: 'rgba(255, 255, 255, 0.7)',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                }}
            >

                <h2 className="text-3xl font-semibold text-center mb-4">Login</h2>
                <form>
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
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transform hover:scale-105 transition duration-300 ease-in-out"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
