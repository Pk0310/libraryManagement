import React from 'react';
import backgroundImage from '../images/bg1.jpg';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const mainStyle = {
    background: '#1a202c',
    color: 'gold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Adjusted to space between
    minHeight: '100vh',
    padding: '0 20px',
  };

  const textContainerStyle = {
    flex: 1,
    paddingRight: '30px',
  };

  const buttonStyle = {
    background: 'gold',
    fontSize: '1.25rem',
    color: 'black',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
  };

  const footerStyle = {
    background: '#2d3748',
  };

  return (
    <div className="min-h-screen">
      <main className="relative overflow-hidden" style={mainStyle}>
        <div className="absolute inset-0 z-0">
          <img src={backgroundImage} alt="Background" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="z-10 relative">
          <div style={textContainerStyle}>
          <h2 className="text-5xl font-semibold mb-4" style={{ fontFamily: 'Noto Serif Vithkuqi' }}>LIBRARY MANAGEMENT SYSTEM</h2> {/* Increased font size */}
            <p className="text-lg mb-6">
            EMBARK ON A JOURNEY INTO THE REALM OF BOOKS
            </p>
          </div>
          <div>
            <Link to="/">
              <button className="px-4 py-2 rounded hover:bg-gray-600" style={buttonStyle}>
                Begin Now
              </button>
            </Link>
          </div>
        </div>
      </main>

      
    </div>
  );
}

export default HomePage;
