import React from "react";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    name: "why-choose-soulseed-marketing",
    title: "Why Choose The SoulSeed Marketing: Where Creativity Meets Consciousness 🌱",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    summary: "Unlock the secrets to organic Instagram growth in 2025 with our expert tips and strategies!"
  },

];

const Blogs = () => {
  const navigate = useNavigate();
  const latest = blogs[0];
  const recents = blogs.slice(1);

  return (
      <div>
        <button className="secondary-button go-home-btn" onClick={() => navigate("/")}>Go to Home</button>
      <div className="blogs-main-container">
      <h1 className="primary-heading" style={{textAlign: 'center', marginBottom: '2rem'}}>Our Latest Blog</h1>
      <div className="latest-blog-card" onClick={() => navigate(`/blog/${latest.name}`)} style={{cursor: 'pointer'}}>
        <img src={latest.image} alt={latest.title} className="latest-blog-img" />
        <div className="latest-blog-content">
          <h2>{latest.title}</h2>
          <p>{latest.summary}</p>
          {/* <button className="secondary-button">Read Blog</button> */}
        </div>
      </div>
      <h2 className="primary-subheading" style={{marginTop: '3rem', marginBottom: '1rem'}}>Our Older Blogs</h2>
      <div className="recent-blogs-list">
        {recents.map(blog => (
          <div key={blog.name} className="recent-blog-item" onClick={() => navigate(`/blog/${blog.name}`)} style={{cursor: 'pointer'}}>
            <img src={blog.image} alt={blog.title} className="recent-blog-img" />
            <div>
              <h3>{blog.title}</h3>
              <p>{blog.summary}</p>
              <span className="blog-link">Read Blog &rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Blogs;

/*
Add to App.css for styling:


*/
