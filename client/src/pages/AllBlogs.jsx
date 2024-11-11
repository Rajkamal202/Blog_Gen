import  { useEffect } from 'react';
import { useBlog } from '../context/BlogContext';
import BlogList from '../components/BlogList';
import Loader from '../components/Loader';

const AllBlogs = () => {
  const { allBlogs, loading, error, fetchAllBlogs } = useBlog();

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-gray-800">All Generated Blogs</h1>
      <BlogList blogs={allBlogs} />
    </div>
  );
};

export default AllBlogs;