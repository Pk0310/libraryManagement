import React from 'react';
import { Link } from 'react-router-dom';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
</style>
const Header = () => {
  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    fontSize:'20px',
    width: '100%',
    zIndex: 1000,
    backgroundColor: 'lavender', // Set background color to dark black
    color: 'orchid',
    padding: '8px 16px',
  };

  const logoStyle = {
    fontFamily: 'Pacifico, cursive',
    fontSize: '2rem', // Adjust the font size as needed
    letterSpacing: '1px', // Add some letter spacing for aesthetics
  };
  return (
    <header style={headerStyle}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
        <h1 className="text-2xl font-semibold" style={logoStyle}>LMS BY PRATYASHA</h1>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/books"
                className="text-red hover:text-yellow-300 transition duration-300"
              >
                Books
              </Link>
            </li>
            <li>
              <Link
                to="/members"
                className="text-red hover:text-yellow-300 transition duration-300"
              >
                Members
              </Link>
            </li>
            <li>
              <Link
                to="/import-books"
                className="text-red hover:text-yellow-300 transition duration-300"
              >
                Import Books
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
