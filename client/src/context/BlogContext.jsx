import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const BlogContext = createContext();

export const useBlog = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
  const [blog, setBlog] = useState(null);
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateBlog = async (prompt) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/generate`, { prompt });
      setBlog(response.data.blog);
    } catch (err) {
      setError('Failed to generate blog. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllBlogs = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/blogs`);
      setAllBlogs(response.data);
    } catch (err) {
      setError('Failed to fetch blogs. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <BlogContext.Provider value={{ blog, allBlogs, loading, error, generateBlog, fetchAllBlogs }}>
      {children}
    </BlogContext.Provider>
  );
};