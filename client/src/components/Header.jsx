import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            BlogGenius
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-gray-600 hover:text-indigo-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/all-blogs" className="text-gray-600 hover:text-indigo-600">
                All Blogs
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-600 hover:text-indigo-600">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;