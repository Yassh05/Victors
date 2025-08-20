import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import '../styles/Blog.css';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Web Applications with React and Node.js",
      excerpt: "Learn how to create robust, scalable web applications using modern JavaScript technologies. This comprehensive guide covers best practices, architecture patterns, and performance optimization.",
      content: "Full article content would go here...",
      author: "Tech Lead",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Tutorial",
      tags: ["React", "Node.js", "Web Development"],
      image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "VictorHack 2024: Registration Now Open!",
      excerpt: "Get ready for our biggest hackathon yet! VictorHack 2024 brings together the brightest minds to solve real-world problems with innovative technology solutions.",
      content: "Full announcement content would go here...",
      author: "Events Team",
      date: "2024-01-12",
      readTime: "3 min read",
      category: "Announcement",
      tags: ["Hackathon", "Events", "Competition"],
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "Machine Learning Workshop: Key Takeaways",
      excerpt: "A recap of our recent AI and Machine Learning workshop, including resources, projects, and next steps for continued learning in this exciting field.",
      content: "Full article content would go here...",
      author: "Sarah Johnson",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Recap",
      tags: ["AI", "Machine Learning", "Workshop"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      featured: false
    },
    {
      id: 4,
      title: "Contributing to Open Source: A Beginner's Guide",
      excerpt: "Open source contribution can seem daunting for beginners. This guide breaks down the process and provides practical steps to make your first contribution.",
      content: "Full tutorial content would go here...",
      author: "Alex Chen",
      date: "2024-01-08",
      readTime: "10 min read",
      category: "Tutorial",
      tags: ["Open Source", "Git", "GitHub"],
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      featured: false
    },
    {
      id: 5,
      title: "New Industry Partnership Announcement",
      excerpt: "We're excited to announce our new partnerships with leading tech companies, opening up more opportunities for internships and career development.",
      content: "Full announcement content would go here...",
      author: "Leadership Team",
      date: "2024-01-05",
      readTime: "4 min read",
      category: "News",
      tags: ["Partnership", "Career", "Industry"],
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      featured: false
    },
    {
      id: 6,
      title: "Cybersecurity Best Practices for Students",
      excerpt: "In today's digital world, understanding cybersecurity is crucial. Learn essential practices to protect your data and digital identity.",
      content: "Full article content would go here...",
      author: "Security Team",
      date: "2024-01-03",
      readTime: "7 min read",
      category: "Education",
      tags: ["Cybersecurity", "Privacy", "Safety"],
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      featured: false
    }
  ];

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const categoryMatch = selectedCategory === 'All' || post.category === selectedCategory;
    const searchMatch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <section id="blog" className="blog">
      <div className="blog-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Blog & Announcements</h2>
          <p className="section-subtitle">
            Stay updated with our latest tutorials, news, and community updates
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="featured-post">
            <div className="featured-image">
              <img src={featuredPost.image} alt={featuredPost.title} />
            </div>
            <div className="featured-content">
              <div className="post-category featured">{featuredPost.category}</div>
              <h3 className="featured-title">{featuredPost.title}</h3>
              <p className="featured-excerpt">{featuredPost.excerpt}</p>
              <div className="post-meta">
                <span className="post-author">
                  <User size={16} />
                  {featuredPost.author}
                </span>
                <span className="post-date">
                  <Calendar size={16} />
                  {new Date(featuredPost.date).toLocaleDateString()}
                </span>
                <span className="post-read-time">
                  <Clock size={16} />
                  {featuredPost.readTime}
                </span>
              </div>
              <div className="post-tags">
                {featuredPost.tags.map((tag, index) => (
                  <span key={index} className="post-tag">
                    <Tag size={12} />
                    {tag}
                  </span>
                ))}
              </div>
              <button className="read-more-btn">
                Read Full Article
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Blog Controls */}
        <div className="blog-controls">
          <div className="search-box">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid">
          {filteredPosts
            .filter(post => !post.featured)
            .map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <div className="post-category">{post.category}</div>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="post-meta">
                    <span className="post-author">
                      <User size={14} />
                      {post.author}
                    </span>
                    <span className="post-date">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="post-read-time">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  <div className="post-tags">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="post-tag">
                        <Tag size={10} />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="read-more-btn">
                    Read More
                    <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="no-results">
            <h3>No articles found</h3>
            <p>Try adjusting your search terms or category filter.</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="newsletter-signup">
          <div className="newsletter-content">
            <h3>Stay in the Loop</h3>
            <p>Subscribe to our newsletter for the latest updates, tutorials, and event announcements.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button className="btn-btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;