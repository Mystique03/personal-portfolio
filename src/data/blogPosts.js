// src/data/blogPosts.js

// Categories for filtering
export const categories = [
  "All",
  "AI Breakthroughs",
  "Research Papers",
  "Books",
  "Anime",
  "Thoughts"
];

// Blog posts (links to your Notion pages)
export const blogPosts = [
  //{
  //  id: 1,
  //  title: "GPT-4 and the Future of Multimodal AI",
  //  description: "Exploring the capabilities and implications of large multimodal models in 2024.",
  //  notionUrl: "https://notion.so/your-page-id-1", // Replace with your actual Notion page URL
  //  date: "2024-12-20",
  //  category: "AI Breakthroughs",
  //  tags: ["GPT-4", "Multimodal", "LLMs"],
  //  readTime: "5 min read"
  //},
  //{
  //  id: 2,
  //  title: "My Favorite Papers from NeurIPS 2024",
  //  description: "A curated list of groundbreaking papers from this year's conference.",
  //  notionUrl: "https://notion.so/your-page-id-2",
  //  date: "2024-12-15",
  //  category: "Research Papers",
  //  tags: ["NeurIPS", "Research", "Deep Learning"],
  //readTime: "8 min read"
  //},
  
  // Add more posts here - just update this array when you create new Notion pages!
];

// Helper function to get posts by category
export const getPostsByCategory = (category) => {
  if (category === "All") return blogPosts;
  return blogPosts.filter(post => post.category === category);
};

// Helper function to get recent posts
export const getRecentPosts = (count = 3) => {
  return blogPosts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);
};