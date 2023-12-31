import React from 'react';
import BookList from '../components/BookList';
import backgroundImage from '../images/bg2.jpg'; 

const BooksPage = () => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', // Set background size to cover the entire element
    backgroundAttachment: 'fixed', // Set background attachment to fixed
    minHeight: '100vh', // Set the minimum height to the height of the viewport
    minWidth: '100vw', // Set the minimum width to the width of the viewport
    padding: '12px 4px',
  };

  const contentStyle = {
    marginTop: '100px', // Add a top margin of 100px to the content
    backgroundColor: '#FF7F50',
  };

  return (
    <div style={divStyle}>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8" style={contentStyle}>
        <div className="bg-transparent overflow-hidden shadow-xl rounded-lg p-6 text-white">
          <h2 className="text-2xl font-semibold mb-4">List of Books</h2>
          <BookList />
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
