import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <div key={blog._id} className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">{blog.prompt}</h2>
          <p className="text-gray-600 mb-4">{blog.content.substring(0, 150)}...</p>
          <Link
            to={`/generated-blog/${blog._id}`}
            className="text-indigo-600 hover:text-indigo-800"
          >
            Read more
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;