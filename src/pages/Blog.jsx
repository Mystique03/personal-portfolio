// src/pages/Blog.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Clock, Star } from 'lucide-react';
import { blogPosts, categories as blogCategories, getPostsByCategory } from '../data/blogPosts';
import { recommendations, categories as recCategories, getRecommendationsByCategory } from '../data/recommendations';

const Blog = ({ theme }) => {
  const [selectedBlogCategory, setSelectedBlogCategory] = useState('All');
  const [selectedRecCategory, setSelectedRecCategory] = useState('All');
  
  const filteredPosts = getPostsByCategory(selectedBlogCategory);
  const filteredRecs = getRecommendationsByCategory(selectedRecCategory);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? `${theme.accent} fill-current` : theme.textDim}`}
      />
    ));
  };

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text}`}>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-24">
        {/* Back to Home */}
        <Link
          to="/"
          className={`inline-flex items-center font-medium leading-tight ${theme.accent} ${theme.accentHover} group mb-8 transition-all`}
        >
          <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2" />
          Smitha Reddy
        </Link>

        {/* Header */}
        <div className="mb-16">
          <h1 className={`text-4xl font-bold tracking-tight ${theme.textBright} sm:text-5xl mb-4`}>
            Blog & Thoughts
          </h1>
          <p className={`${theme.textMedium} max-w-2xl text-lg`}>
            Sharing insights on AI breakthroughs, research papers, and random thoughts that spark curiosity.
          </p>
        </div>

        {/* Blog Posts Section */}
        <section className="mb-24">
          <h2 className={`text-2xl font-bold ${theme.textBright} mb-8`}>Latest Posts</h2>
          
          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-2">
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedBlogCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedBlogCategory === category
                    ? `${theme.tagBg} ${theme.tagText} ring-2 ${theme.border}`
                    : `${theme.textDim} ${theme.tagHover} ${theme.cardBorder} border`
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredPosts.map((post) => (
              <article key={post.id} className="group relative">
                <a href={post.notionUrl} target="_blank" rel="noreferrer" className="block">
                  <div className={`relative rounded-lg ${theme.cardBorder} border p-6 transition-all duration-300 ${theme.cardHover} hover:${theme.shadow}`}>
                    <div className="mb-3">
                      <span className={`inline-flex items-center rounded-full ${theme.tagBg} px-3 py-1 text-xs font-medium ${theme.tagText}`}>
                        {post.category}
                      </span>
                    </div>
                    <h3 className={`text-lg font-bold ${theme.textBright} mb-2 ${theme.accentHover} transition-colors flex items-start justify-between gap-2`}>
                      <span>{post.title}</span>
                      <ExternalLink className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </h3>
                    <p className={`${theme.textMedium} mb-4 text-sm leading-relaxed`}>
                      {post.description}
                    </p>
                    <div className={`flex items-center gap-4 text-xs ${theme.textDim}`}>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className={`text-center py-12 ${theme.textMedium}`}>
              No posts found in this category.
            </div>
          )}
        </section>

        {/* Recommendations Section */}
        <section>
          <div className="mb-8">
            <h2 className={`text-2xl font-bold ${theme.textBright} mb-2`}>My Recommendations</h2>
            <p className={`${theme.textMedium}`}>
              Books, papers, anime, and more that have inspired and influenced me.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-2">
            {recCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedRecCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedRecCategory === category
                    ? `${theme.tagBg} ${theme.tagText} ring-2 ${theme.border}`
                    : `${theme.textDim} ${theme.tagHover} ${theme.cardBorder} border`
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Recommendations Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredRecs.map((rec) => (
              <article key={rec.id} className="group">
                <a href={rec.link} target="_blank" rel="noreferrer" className="block">
                  <div className={`relative rounded-lg overflow-hidden ${theme.cardBorder} border transition-all duration-300 ${theme.cardHover} hover:${theme.shadow}`}>
                    {/* Image */}
                    <div className="aspect-[3/4] overflow-hidden bg-neutral-800">
                      <img
                        src={rec.image}
                        alt={rec.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-4">
                      <div className={`text-xs font-semibold ${theme.accent} uppercase tracking-wide mb-1`}>
                        {rec.type}
                      </div>
                      <h3 className={`font-bold ${theme.textBright} mb-1 line-clamp-2 text-sm`}>
                        {rec.title}
                      </h3>
                      <p className={`text-xs ${theme.textDim} mb-2`}>
                        {rec.creator} · {rec.year}
                      </p>

                      {/* Ratings
                      <div className="flex items-center gap-1 mb-3">
                        {renderStars(rec.rating)}
                      </div>
                      */}
                      
                      
                      {/* Why I recommend */}
                      <p className={`text-xs ${theme.textMedium} leading-relaxed line-clamp-3`}>
                        {rec.why}
                      </p>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>

          {filteredRecs.length === 0 && (
            <div className={`text-center py-12 ${theme.textMedium}`}>
              No recommendations in this category yet.
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className={`mt-24 pt-8 border-t ${theme.borderDim} text-sm ${theme.textDim}`}>
          <p className="mb-2">
            Posts are hosted on Notion for easy writing and updating.
          </p>
          <p>
            {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} · {filteredRecs.length} {filteredRecs.length === 1 ? 'recommendation' : 'recommendations'}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Blog;