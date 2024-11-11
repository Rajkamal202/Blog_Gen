import React from 'react';
import { useNavigate } from 'react-router-dom';
import PromptForm from '../components/PromptForm';
import Loader from '../components/Loader';
import { useBlog } from '../context/BlogContext';

const Home = () => {
  const { loading, error, generateBlog } = useBlog();
  const navigate = useNavigate();

  const handleSubmit = async (prompt) => {
    await generateBlog(prompt);
    navigate('/generated-blog');
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-gray-800">Blog Generator</h1>
      <PromptForm onSubmit={handleSubmit} />
      {loading && <Loader />}
      {error && <p className="text-red-500 text-center">{error}</p>}
    </div>
  );
};

export default Home;