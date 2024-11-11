const { GoogleGenerativeAI } = require("@google/generative-ai");
const Blog = require('../models/Blog');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.generateBlog = async (req, res) => {
  try {
    const { prompt } = req.body;

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(`Write a 1000 word blog post about: ${prompt}`);
    const blogContent = result.response.text();

    // Save the generated blog to the database
    const newBlog = new Blog({
      prompt,
      content: blogContent,
    });
    await newBlog.save();

    res.json({ blog: blogContent });
  } catch (error) {
    console.error('Error generating blog:', error);
    res.status(500).json({ error: 'Failed to generate blog' });
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
};