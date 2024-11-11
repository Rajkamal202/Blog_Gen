import React from 'react';
import { Link } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import { useBlog } from '../context/BlogContext';

const GeneratedBlog = () => {
  const { blog } = useBlog();

  if (!blog) {
    return (
      <div className="text-center">
        <p className="text-xl mb-4">No blog has been generated yet.</p>
        <Link to="/" className="text-indigo-600 hover:text-indigo-800">
          Go back to generate a blog
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-gray-800">Generated Blog</h1>
      <BlogPost content={blog} />
      <div className="text-center">
        <Link
          to="/"
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Generate Another Blog
        </Link>
      </div>
    </div>
  );
};

export default GeneratedBlog;