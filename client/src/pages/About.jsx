import React from 'react';

const About = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Blog Generator</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-gray-700 mb-4">
          Blog Generator is an innovative platform that leverages the power of artificial intelligence to create
          high-quality blog posts based on user-provided prompts. Our mission is to empower content creators,
          marketers, and businesses with a tool that can quickly generate engaging and informative blog content.
        </p>
        <p className="text-gray-700 mb-4">
          Using advanced natural language processing techniques, our AI model can understand the context and intent
          behind your prompts, producing coherent and relevant blog posts on a wide range of topics. Whether you're
          looking for inspiration, need to create content quickly, or want to explore new ideas, Blog Generator is
          here to help.
        </p>
        <p className="text-gray-700">
          We're constantly improving our AI model and user experience to provide you with the best possible
          blog generation tool. If you have any questions, suggestions, or feedback, please don't hesitate to
          contact us. Happy blogging!
        </p>
      </div>
    </div>
  );
};

export default About;