import React from 'react';
import ReactMarkdown from 'react-markdown';

const BlogPost = ({ content }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <ReactMarkdown className="prose lg:prose-xl">{content}</ReactMarkdown>
    </div>
  );
};

export default BlogPost;