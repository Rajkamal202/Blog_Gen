import React, { useState } from 'react';

const PromptForm = ({ onSubmit }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(prompt);
    setPrompt('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">
          Enter your blog topic
        </label>
        <textarea
          id="prompt"
          rows="4"
          className="mt-2 p-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="e.g., The impact of artificial intelligence on modern healthcare"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Generate Blog
      </button>
    </form>
  );
};

export default PromptForm;